import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import ConfirmCard from "./ConfirmCard";
import TimeSlot from "./TimeSlot";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const BookCard = () => {
    const [services, setServices] = useState([]);
    const [serviceIndex, setService] = useState("");
    const [location, setLocation] = useState("");
    const [confirmData, setConfirmData] = useState(false);
    const [confirmBookDate, setConfirmBookDate] = useState(false);
    const [bookDate, setBookDate] = useState(new Date());
    const [timePeriod, setTimePeriod] = useState([]);
    const [selectedTime, setSelectedTime] = useState("");
    const [bookedTimes, setBookedTimes] = useState([]);

    useEffect(() => {
        axios
            .get("/api/services")
            .then((res) => {
                setServices(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (location)
            axios
                .get(`/api/locations/${location}`)
                .then((res) => {
                    setTimePeriod([
                        ...generateTimePeriod(
                            res.data["openingTime"],
                            res.data["closingTime"]
                        ),
                    ]);
                    setBookedTimes(res.data["bookedTimes"].split(","));
                    localStorage.setItem(
                        "bookedTimes",
                        res.data["bookedTimes"]
                    );
                })
                .catch((err) => console.log(err));
    }, [location]);

    const handleConfirmData = () => {
        if (!confirmData) setConfirmData(true);
        else setConfirmBookDate(true);
    };

    const convertDateToString = (date) => {
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();
        return `${String(day).length === 2 ? day : `0${day}`}/${
            String(month).length === 2 ? month : `0${month}`
        }/${year}`;
    };

    const isValidDate = (date) => {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth();
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        return date >= new Date(year, month, day);
    };

    const generateTimePeriod = (minTime, maxTime, duration = 5) => {
        const periods = [];
        var start;
        minTime = minTime.trim();
        maxTime = maxTime.trim();
        var ended = false;

        for (
            var i = Number(minTime.split(":")[0]);
            i <= Number(maxTime.split(":")[0]);
            i++
        ) {
            for (var j = 0; j <= 55; j += duration) {
                const time = `${String(i).length === 2 ? i : "0" + String(i)}:${
                    String(j).length === 2 ? j : "0" + String(j)
                }`;

                const endTime =
                    j === 55
                        ? `${
                              String(i + 1).length === 2
                                  ? i + 1
                                  : "0" + String(i + 1)
                          }:00`
                        : `${String(i).length === 2 ? i : "0" + String(i)}:${
                              String(j + 5).length === 2
                                  ? j + 5
                                  : "0" + String(j + 5)
                          }`;
                if (time === minTime) start = true;
                if (start) periods.push(time + " - " + endTime);
                if (endTime === maxTime) {
                    ended = true;
                    break;
                }
            }
            if (ended) break;
        }
        return periods;
    };

    return (
        <div
            className="card"
            style={{
                flexDirection: "row",
                width: "75%",
                boxShadow: "#eeeeee 0px 0px 20px 14px",
                border: "1px solid #eeeeee",
            }}
        >
            {confirmBookDate ? (
                <ConfirmCard
                    serviceTitle={services[serviceIndex].name}
                    bookDate={
                        convertDateToString(bookDate) +
                        " " +
                        selectedTime.split(" ").join("")
                    }
                    location={location}
                    price={services[serviceIndex].price}
                    setConfirmBookDate={setConfirmBookDate}
                />
            ) : (
                <>
                    <div
                        className="card-body"
                        style={{ padding: "70px 50px", width: "50%" }}
                    >
                        {confirmData && (
                            <form>
                                <h5
                                    className="card-title"
                                    style={{
                                        fontSize: "1.5rem",
                                        marginBottom: "30px",
                                    }}
                                >
                                    Book your PCR Test now
                                </h5>
                                <div className="form-group">
                                    <label htmlFor="service">Service</label>
                                    <select
                                        className="form-control"
                                        id="service"
                                        value={serviceIndex}
                                        onChange={(e) =>
                                            setService(e.target.value)
                                        }
                                        style={{ marginBottom: "20px" }}
                                    >
                                        {services.map(({ name }, index) => (
                                            <option key={index} value={index}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>

                                    <label htmlFor="location">Location</label>
                                    <select
                                        className="form-control"
                                        id="location"
                                        style={{
                                            marginBottom: "20px",
                                        }}
                                        value={location}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                    >
                                        {services[serviceIndex].locations.map(
                                            ({ name, id }, index) => (
                                                <option value={id} key={index}>
                                                    {name}
                                                </option>
                                            )
                                        )}
                                    </select>
                                    <p>
                                        Price:{" "}
                                        <span style={{ color: "#02be02" }}>
                                            £
                                            {services[
                                                serviceIndex
                                            ].price.toFixed(2)}
                                        </span>
                                    </p>
                                    <p>
                                        x1 PCR Test with Fit to Fly certificate
                                        Please bring your passport/ID to your
                                        appointment. This purchase is
                                        non-refundable.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                    <div
                        className="card-body"
                        style={{ padding: "70px 50px", width: "50%" }}
                    >
                        {confirmData ? (
                            <>
                                <DatePicker
                                    selected={bookDate}
                                    onChange={(date) => setBookDate(date)}
                                    filterDate={isValidDate}
                                    inline
                                />
                                <div
                                    className="row"
                                    style={{
                                        margin: "15px 0",
                                        overflowY: "scroll",
                                        height: 125,
                                    }}
                                >
                                    {timePeriod.map((time, index) => (
                                        <TimeSlot
                                            time={time}
                                            setSelectedTime={setSelectedTime}
                                            key={index}
                                            booked={bookedTimes.includes(
                                                convertDateToString(bookDate) +
                                                    " " +
                                                    time.split(" ").join("")
                                            )}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <>
                                <h5
                                    className="card-title"
                                    style={{
                                        fontSize: "1.5rem",
                                        marginBottom: "30px",
                                    }}
                                >
                                    Book your PCR Test now
                                </h5>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="service">Service</label>
                                        <select
                                            className="form-control"
                                            id="service"
                                            value={serviceIndex}
                                            onChange={(e) =>
                                                setService(e.target.value)
                                            }
                                            style={{ marginBottom: "20px" }}
                                        >
                                            <option
                                                value=""
                                                disabled
                                                style={{ display: "none" }}
                                            >
                                                Select service
                                            </option>
                                            {services.map(({ name }, index) => (
                                                <option
                                                    key={index}
                                                    value={index}
                                                >
                                                    {name}
                                                </option>
                                            ))}
                                        </select>
                                        {serviceIndex && (
                                            <>
                                                <label htmlFor="location">
                                                    Location
                                                </label>
                                                <select
                                                    className="form-control"
                                                    id="location"
                                                    style={{
                                                        marginBottom: "20px",
                                                    }}
                                                    value={location}
                                                    onChange={(e) =>
                                                        setLocation(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option
                                                        value=""
                                                        disabled
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        Select location
                                                    </option>
                                                    {services[
                                                        serviceIndex
                                                    ].locations.map(
                                                        (
                                                            { name, id },
                                                            index
                                                        ) => (
                                                            <option
                                                                value={id}
                                                                key={index}
                                                            >
                                                                {name}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                                <p>
                                                    Price:{" "}
                                                    <span
                                                        style={{
                                                            color: "#02be02",
                                                        }}
                                                    >
                                                        £
                                                        {services[
                                                            serviceIndex
                                                        ].price.toFixed(2)}
                                                    </span>
                                                </p>
                                                <p>
                                                    x1 PCR Test with Fit to Fly
                                                    certificate Please bring
                                                    your passport/ID to your
                                                    appointment. This purchase
                                                    is non-refundable.
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </form>
                            </>
                        )}
                        <button
                            type="button"
                            className="btn btn-secondary"
                            style={{ width: "100%", marginTop: "10px" }}
                            disabled={confirmData ? !selectedTime : !location}
                            onClick={handleConfirmData}
                        >
                            Continue
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default BookCard;
