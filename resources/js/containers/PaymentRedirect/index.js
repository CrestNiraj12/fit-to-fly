import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import qs from "query-string";
import axios from "axios";

const PaymentRedirect = ({ location, success }) => {
    const query = qs.parse(location.search);
    const [redirect, setRedirect] = useState(false);

    const finalTask = () => {
        localStorage.clear();
        setTimeout(() => setRedirect(true), 2000);
    };

    useEffect(() => {
        var mounted = true;
        if (success) {
            const method = query.method.toLowerCase();
            if (method === "stripe") {
                if (mounted)
                    axios
                        .post("/api/stripe/session", {
                            sessionId: query.session_id,
                        })
                        .then(async (res) => {
                            const details = res.data;
                            const data = {
                                method,
                                amount: details.amount_total / 100,
                                customer_id: localStorage.getItem("customerId"),
                            };
                            return await axios.post("/api/orders/", data);
                        })
                        .then(async () => {
                            const service = JSON.parse(
                                localStorage.getItem("service")
                            );

                            const bookedTimes = localStorage.getItem(
                                "bookedTimes"
                            );

                            return await axios.put(
                                `/api/locations/${service.locationId}`,
                                {
                                    bookedTimes:
                                        (bookedTimes !== "" &&
                                        bookedTimes !== null
                                            ? bookedTimes + ","
                                            : "") + service.date,
                                }
                            );
                        })
                        .then(() => {
                            console.log("Payment successful!");
                            finalTask();
                        })
                        .catch((err) => console.log(err.response));
            } else finalTask();
        } else finalTask();
        return () => {
            mounted = false;
        };
    }, []);

    return redirect ? (
        <Redirect to="/" />
    ) : (
        <div style={{ textAlign: "center", margin: "250px 0" }}>
            <p
                style={{
                    fontSize: "25px",
                }}
            >
                {success
                    ? "Your payment was successful!"
                    : "Your payment was cancelled!"}{" "}
                {success ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="green"
                        className="bi bi-check-circle"
                        viewBox="0 0 16 16"
                        style={{ display: "inline-block" }}
                    >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="red"
                        className="bi bi-x-square-fill"
                        style={{ display: "inline-block" }}
                        viewBox="0 0 16 16"
                    >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                )}
            </p>
            <small>
                <span>
                    <div
                        className="spinner-border"
                        role="status"
                        style={{
                            fontSize: 1,
                            width: 10,
                            height: 10,
                            margin: "0 3px 2.5px 0",
                        }}
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </span>
                Redirecting to homepage... <Link to="/">Go home</Link>
            </small>
        </div>
    );
};

export default PaymentRedirect;
