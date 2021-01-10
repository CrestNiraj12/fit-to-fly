import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookCard = () => {
    const services = [
        {
            title: "LIFE Pharmacy COVID-19 PCR Test + Fit to Fly Certificate",
            locations: [
                "Life Pharmacy Brompton Road",
                "Life Pharmacy Oxford Street",
            ],
            price: 99.0,
        },
    ];

    const [serviceIndex, setService] = useState("");
    const [locationIndex, setLocation] = useState("");
    const [confirmData, setConfirmData] = useState(false);
    const [bookDate, setBookDate] = useState(new Date());

    const isValidDate = (date) => {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth();
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        return date >= new Date(year, month, day);
    };

    useEffect(() => console.log(bookDate), [bookDate]);

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
                                onChange={(e) => setService(e.target.value)}
                                style={{ marginBottom: "20px" }}
                            >
                                {services.map(({ title }, index) => (
                                    <option key={index} value={index}>
                                        {title}
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
                                value={locationIndex}
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                {services[serviceIndex].locations.map(
                                    (location, index) => (
                                        <option value={index} key={index}>
                                            {location}
                                        </option>
                                    )
                                )}
                            </select>
                            <p>
                                Price:{" "}
                                <span style={{ color: "#02be02" }}>
                                    £{services[serviceIndex].price.toFixed(2)}
                                </span>
                            </p>
                            <p>
                                x1 PCR Test with Fit to Fly certificate Please
                                bring your passport/ID to your appointment. This
                                purchase is non-refundable.
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
                    <DatePicker
                        selected={bookDate}
                        onChange={(date) => setBookDate(date)}
                        filterDate={isValidDate}
                        inline
                    />
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
                                    onChange={(e) => setService(e.target.value)}
                                    style={{ marginBottom: "20px" }}
                                >
                                    <option
                                        value=""
                                        disabled
                                        style={{ display: "none" }}
                                    >
                                        Select service
                                    </option>
                                    {services.map(({ title }, index) => (
                                        <option key={index} value={index}>
                                            {title}
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
                                            value={locationIndex}
                                            onChange={(e) =>
                                                setLocation(e.target.value)
                                            }
                                        >
                                            <option
                                                value=""
                                                disabled
                                                style={{ display: "none" }}
                                            >
                                                Select location
                                            </option>
                                            {services[
                                                serviceIndex
                                            ].locations.map(
                                                (location, index) => (
                                                    <option
                                                        index={index}
                                                        key={index}
                                                    >
                                                        {location}
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
                                            x1 PCR Test with Fit to Fly
                                            certificate Please bring your
                                            passport/ID to your appointment.
                                            This purchase is non-refundable.
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
                    disabled={!locationIndex}
                    onClick={() => setConfirmData(true)}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default BookCard;
