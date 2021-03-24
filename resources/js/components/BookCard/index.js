import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import ConfirmCard from "./ConfirmCard";
import TimeSlot from "./TimeSlot";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Image from "../../../images/image2.webp";

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
    const [passportNumber, setPassportNumber] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [loading, setLoading] = useState(true);
    const [dob, setDob] = useState("");

    useEffect(() => {
        axios
            .get("/api/services")
            .then((res) => {
                setServices(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        setLoading(true);
        if (location) {
            const locData = services[serviceIndex].locations[location];
            const openings = locData["openingTime"]
                .split(",")
                .map((time) => time.split("-"));
            const closings = locData["closingTime"]
                .split(",")
                .map((time) => time.split("-"));
            const selectedDay = bookDate.getDay();

            if (selectedDay === 0)
                setTimePeriod(
                    openings.length === 3
                        ? [
                              ...generateTimePeriod(
                                  openings[2][0],
                                  closings[2][0]
                              ),
                              ...(openings[1].length > 1
                                  ? generateTimePeriod(
                                        openings[2][1],
                                        closings[2][1]
                                    )
                                  : ""),
                          ]
                        : null
                );
            else if (selectedDay === 6)
                setTimePeriod([
                    ...generateTimePeriod(openings[1][0], closings[1][0]),
                    ...(openings[1].length > 1
                        ? generateTimePeriod(openings[1][1], closings[1][1])
                        : ""),
                ]);
            else
                setTimePeriod([
                    ...generateTimePeriod(openings[0][0], closings[0][0]),
                    ...(openings[0].length > 1
                        ? generateTimePeriod(openings[0][1], closings[0][1])
                        : ""),
                    ,
                ]);

            setBookedTimes(locData["bookedTimes"].split(","));
            localStorage.setItem("bookedTimes", locData["bookedTimes"]);
            setLoading(false);
        }
    }, [location, bookDate]);

    const handleConfirmData = () => {
        if (!confirmData) setConfirmData(true);
        else setConfirmBookDate(true);
        localStorage.setItem("passportNumber", passportNumber);
        localStorage.setItem("dob", dob);
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
        <div className="card bookCard">
            {confirmBookDate ? (
                <ConfirmCard
                    serviceObject={services[serviceIndex]}
                    bookDate={
                        convertDateToString(bookDate) +
                        " " +
                        selectedTime.split(" ").join("")
                    }
                    dob={dob}
                    location={services[serviceIndex].locations[location]}
                    price={services[serviceIndex].options[selectedOption].price}
                    setConfirmBookDate={setConfirmBookDate}
                    passportNumber={passportNumber}
                    selectedOption={
                        services[serviceIndex].options[selectedOption]
                    }
                />
            ) : (
                <>
                    <div className="card-body card-left-body">
                        {confirmData ? (
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
                                        onChange={(e) => {
                                            setLocation(e.target.value);
                                            setSelectedTime("");
                                        }}
                                    >
                                        {services[serviceIndex].locations.map(
                                            ({ name }, index) => (
                                                <option
                                                    value={index}
                                                    key={index}
                                                >
                                                    {name}
                                                </option>
                                            )
                                        )}
                                    </select>
                                    <label htmlFor="dob">Date of Birth</label>
                                    <input
                                        className="form-control"
                                        type="date"
                                        id="dob"
                                        style={{
                                            marginBottom: "20px",
                                        }}
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="passport">
                                        Passport No.
                                    </label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        id="passport"
                                        style={{
                                            marginBottom: "20px",
                                        }}
                                        value={passportNumber}
                                        onChange={(e) =>
                                            setPassportNumber(e.target.value)
                                        }
                                        required
                                    />
                                    <label htmlFor="option">Option</label>
                                    <select
                                        className="form-control"
                                        id="option"
                                        value={selectedOption}
                                        onChange={(e) =>
                                            setSelectedOption(e.target.value)
                                        }
                                        style={{
                                            marginBottom: "20px",
                                        }}
                                    >
                                        <option
                                            value=""
                                            disabled
                                            style={{
                                                display: "none",
                                            }}
                                        >
                                            Select option
                                        </option>
                                        {services[serviceIndex].options.map(
                                            ({ name }, index) => (
                                                <option
                                                    key={index}
                                                    value={index}
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
                                            {services[serviceIndex].options[
                                                selectedOption
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
                        ) : (
                            <img src={Image} className="displayImage" />
                        )}
                    </div>
                    <div className="card-body card-right-body">
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
                                    {loading ? (
                                        <div
                                            className="spinner-border"
                                            role="status"
                                            style={{ margin: "auto" }}
                                        >
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                    ) : timePeriod === null ? (
                                        <h4>Sorry we are closed on Sunday!</h4>
                                    ) : (
                                        timePeriod.map((time, index) => (
                                            <TimeSlot
                                                time={time}
                                                setSelectedTime={
                                                    setSelectedTime
                                                }
                                                key={index}
                                                booked={bookedTimes.includes(
                                                    convertDateToString(
                                                        bookDate
                                                    ) +
                                                        " " +
                                                        time.split(" ").join("")
                                                )}
                                            />
                                        ))
                                    )}
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
                                                        ({ name }, index) => (
                                                            <option
                                                                value={index}
                                                                key={index}
                                                            >
                                                                {name}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                                <label htmlFor="dob">
                                                    Date of Birth
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="date"
                                                    id="dob"
                                                    style={{
                                                        marginBottom: "20px",
                                                    }}
                                                    value={dob}
                                                    onChange={(e) =>
                                                        setDob(e.target.value)
                                                    }
                                                    required
                                                />
                                                <label htmlFor="passport">
                                                    Passport Number
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="passport"
                                                    type="number"
                                                    style={{
                                                        marginBottom: "20px",
                                                    }}
                                                    value={passportNumber}
                                                    onChange={(e) =>
                                                        setPassportNumber(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <label htmlFor="option">
                                                    Option
                                                </label>
                                                <select
                                                    className="form-control"
                                                    id="option"
                                                    value={selectedOption}
                                                    onChange={(e) =>
                                                        setSelectedOption(
                                                            e.target.value
                                                        )
                                                    }
                                                    style={{
                                                        marginBottom: "20px",
                                                    }}
                                                >
                                                    <option
                                                        value=""
                                                        disabled
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        Select option
                                                    </option>
                                                    {services[
                                                        serviceIndex
                                                    ].options.map(
                                                        ({ name }, index) => (
                                                            <option
                                                                key={index}
                                                                value={index}
                                                            >
                                                                {name}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                                {selectedOption && (
                                                    <>
                                                        <p>
                                                            Price:{" "}
                                                            <span
                                                                style={{
                                                                    color:
                                                                        "#02be02",
                                                                }}
                                                            >
                                                                £
                                                                {services[
                                                                    serviceIndex
                                                                ].options[
                                                                    selectedOption
                                                                ].price.toFixed(
                                                                    2
                                                                )}
                                                            </span>
                                                        </p>
                                                        <p>
                                                            x1 PCR Test with Fit
                                                            to Fly certificate
                                                            Please bring your
                                                            passport/ID to your
                                                            appointment. This
                                                            purchase is
                                                            non-refundable.
                                                        </p>
                                                    </>
                                                )}
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
                            disabled={
                                (confirmData
                                    ? !selectedTime
                                    : !location || !selectedOption || !dob) ||
                                passportNumber === ""
                            }
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
