import React from "react";
import { useHistory } from "react-router-dom";
import Image from "../../../images/image2.webp";

const ConfirmCard = ({
    passportNumber,
    serviceObject,
    bookDate,
    dob,
    location,
    price,
    setConfirmBookDate,
    selectedOption,
}) => {
    const history = useHistory();

    const info = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0086ec"
                    className="bi bi-person-circle titleIcon"
                    viewBox="0 0 16 16"
                >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                </svg>
            ),
            title: "Passport No.",
            description: passportNumber,
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0086ec"
                    className="bi bi-geo-alt titleIcon"
                    viewBox="0 0 16 16"
                >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
            ),
            title: "Date of Birth",
            description: dob ? dob : "",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0086ec"
                    className="bi bi-calendar2-check titleIcon"
                    viewBox="0 0 16 16"
                >
                    <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                </svg>
            ),
            title: "Date Time",
            description: bookDate.split("-")[0],
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0086ec"
                    className="bi bi-clock-history titleIcon"
                    viewBox="0 0 16 16"
                >
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
            ),
            title: "Duration",
            description: "5 minutes",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0086ec"
                    className="bi bi-geo-alt titleIcon"
                    viewBox="0 0 16 16"
                >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
            ),
            title: "Location",
            description: location ? location.name : "",
        },
    ];

    const handleConfirm = (e) => {
        e.preventDefault();
        const service = {
            id: serviceObject.id,
            title: serviceObject.name,
            date: bookDate,
            location: location.name,
            locationId: location.id,
            amount: price,
            option: selectedOption.name,
            optionId: selectedOption.id,
        };
        localStorage.setItem("service", JSON.stringify(service));
        history.push("/checkout");
    };

    return (
        <div
            className="card-body"
            style={{ padding: "50px 0", minHeight: 400 }}
        >
            <div className="row" style={{ justifyContent: "center" }}>
                <img src={Image} className="cardHeaderImage" />
            </div>
            <div className="row" style={{ justifyContent: "center" }}>
                <h4>{serviceObject.name}</h4>
            </div>

            <div className="row confirmDetails">
                {info.map(({ icon, title, description }, index) => (
                    <div
                        className={`col-md-${Math.floor(
                            12 / info.length
                        )} details`}
                        key={index}
                        style={{ margin: "0 auto" }}
                    >
                        <div className="row" style={{ margin: "7.5px -15px" }}>
                            {icon}
                            {title}
                        </div>
                        <div className="row" style={{ fontSize: "13px" }}>
                            {description}
                        </div>
                    </div>
                ))}
            </div>
            <div className="row mb-5 amountBlock">
                <div className="col-md-12">
                    <div
                        className="row"
                        style={{
                            justifyContent: "space-between",
                            padding: "5px 0",
                        }}
                    >
                        <span>Service</span>
                        <span
                            className="resFontSize"
                            style={{ color: "#0086ec" }}
                        >
                            {serviceObject.name}
                        </span>
                    </div>
                    <div
                        className="row"
                        style={{
                            justifyContent: "space-between",
                            padding: "5px 0",
                        }}
                    >
                        <span>Option</span>
                        <span
                            className="resFontSize"
                            style={{ color: "#0086ec" }}
                        >
                            {selectedOption.name}
                        </span>
                    </div>
                    <div
                        className="row"
                        style={{
                            justifyContent: "space-between",
                            padding: "5px 0",
                        }}
                    >
                        <span>Total Price</span>
                        <span
                            className="resFontSize"
                            style={{ color: "#0086ec" }}
                        >
                            £{price.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
            <div
                className="row buttonContainer"
                style={{ justifyContent: "center", margin: "0 10%" }}
            >
                <button
                    type="button"
                    className="btn buttonSize"
                    style={{
                        margin: "0 10px",
                        backgroundColor: "#f3f3f3",
                    }}
                    onClick={() => setConfirmBookDate(false)}
                >
                    Back
                </button>
                <button
                    type="button"
                    className="btn buttonSize"
                    style={{
                        backgroundColor: "#0086ec",
                        color: "#fff",
                    }}
                    onClick={handleConfirm}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default ConfirmCard;
