import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { loadStripe } from "@stripe/stripe-js";
import { Redirect, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Image from "../../../images/image1.jpg";
import Image2 from "../../../images/image2.webp";

const stripePromise = loadStripe(
    "pk_test_51HrrlNARkfToiPFSupHqiJpGnsej3pPYyODpRU5x651HuosD4y4b9fufVkDzfKf0BQNbKgxwAKZWMiFWxrnIgaRO000iRAqmx5"
);

const PAYPAL_CLIENT_ID =
    "AU7wEngzj7X-pWbhKsvfGbT4AaLZ0zEyoTL8XPiv01ujkCHwdZdHelg-TrCA-NjYkWz2VwToxE1DyPWV";

const Checkout = () => {
    const history = useHistory();
    const [countries, setCountries] = useState([]);
    const [amount, setAmount] = useState(0);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [service, setService] = useState(null);
    const [details, setDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        address2: "",
        country: "",
        postal: "",
    });
    const [detailsSubmitted, setDetailsSubmitted] = useState(false);
    const [updateInfo, setUpdateInfo] = useState({
        state: false,
        customer_id: null,
    });

    useEffect(() => {
        const parsedService = JSON.parse(localStorage.getItem("service"));
        setService(parsedService);
        setAmount(parsedService.amount);
    }, []);

    const validateForm = () => {
        var isValid = true;
        if (
            !details["firstname"] ||
            !details["lastname"] ||
            !details["email"] ||
            !details["address"] ||
            !details["country"] ||
            !details["postal"]
        )
            isValid = false;

        document
            .querySelector("#firstName")
            .classList.add(!details["firstname"] ? "is-invalid" : "is-valid");
        document
            .querySelector("#firstName")
            .classList.remove(
                !details["firstname"] ? "is-valid" : "is-invalid"
            );
        document
            .querySelector("#lastName")
            .classList.add(!details["lastname"] ? "is-invalid" : "is-valid");
        document
            .querySelector("#lastName")
            .classList.remove(!details["lastName"] ? "is-valid" : "is-invalid");
        document
            .querySelector("#email")
            .classList.add(!details["email"] ? "is-invalid" : "is-valid");
        document
            .querySelector("#email")
            .classList.remove(!details["email"] ? "is-valid" : "is-invalid");
        document
            .querySelector("#address")
            .classList.add(!details["address"] ? "is-invalid" : "is-valid");
        document
            .querySelector("#address")
            .classList.remove(!details["address"] ? "is-valid" : "is-invalid");
        document
            .querySelector("#country")
            .classList.add(!details["country"] ? "is-invalid" : "is-valid");
        document
            .querySelector("#country")
            .classList.remove(!details["country"] ? "is-valid" : "is-invalid");
        document
            .querySelector("#zip")
            .classList.add(!details["postal"] ? "is-invalid" : "is-valid");
        document
            .querySelector("#zip")
            .classList.remove(!details["postal"] ? "is-valid" : "is-invalid");

        if (details["email"] !== "undefined") {
            const pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            document
                .querySelector("#email")
                .classList.add(
                    !pattern.test(details["email"]) ? "is-invalid" : "is-valid"
                );
            document
                .querySelector("#email")
                .classList.remove(
                    !details["email"] ? "is-valid" : "is-invalid"
                );
            if (!pattern.test(details["email"])) isValid = false;
        }
        return isValid;
    };

    useEffect(() => {
        if (localStorage.getItem("countries-ftf"))
            setCountries(JSON.parse(localStorage.getItem("countries-ftf")));
        else
            axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
                const countriesList = res.data.map((country) => country.name);
                setCountries([...countriesList]);
                localStorage.setItem(
                    "countries-ftf",
                    JSON.stringify(countriesList)
                );
            });
    }, []);

    const onApprove = (data, actions) => {
        actions.order.capture().then(() => {
            const details = {
                method: "paypal",
                amount,
                customer_id: updateInfo.customer_id,
            };
            axios
                .post("/api/orders/", details)
                .then(() => {
                    history.push(
                        `/success/?order_id=${data.orderID}&method=paypal`
                    );
                })
                .catch((err) => "Error while creating payments!");
        });
    };

    const onCancel = (data) => {
        history.push("/cancel");
    };

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency: "GBP",
                        value: amount,
                    },
                },
            ],
        });
    };

    const payWithStripe = async (e) => {
        e.preventDefault();
        setButtonLoading(true);

        const stripe = await stripePromise;

        const serviceItem = JSON.stringify({
            price_data: {
                currency: "GBP",
                product_data: {
                    name: service.title,
                    images: [
                        "https://cdn.shopify.com/s/files/1/0518/7289/1069/files/pic3.jpg?240",
                    ],
                },
                unit_amount: Number(amount.toFixed(2)) * 100,
            },
            quantity: 1,
        });

        const response = await axios.post("/api/stripe/pay", {
            service: serviceItem,
        });

        const result = await stripe.redirectToCheckout({
            sessionId: response.data,
        });

        if (result.error) console.log(result.error);
    };

    const handleFormInput = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const handleSubmitDetails = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (!updateInfo.state)
                axios
                    .post("/api/customers", details)
                    .then((res) => {
                        setDetailsSubmitted(true);
                        setUpdateInfo({
                            state: true,
                            customer_id: res.data.customer_id,
                        });
                        localStorage.setItem(
                            "customerId",
                            res.data.customer_id
                        );
                    })
                    .catch((err) => console.log(err));
            else
                axios
                    .put(`/api/customers/${updateInfo.customer_id}`, details)
                    .then((res) => {
                        setDetailsSubmitted(true);
                    })
                    .catch((err) => console.log(err));
        }
    };

    return (
        <>
            {!localStorage.getItem("service") ? (
                <Redirect to="/" />
            ) : (
                <div>
                    <header
                        className="bg-dark py-5 mb-5"
                        style={{
                            background: `url(${Image}) bottom center / cover`,
                        }}
                    >
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-12">
                                    <h1 className="display-4 text-white mt-5 mb-2">
                                        Fit to Fly Covid-19 Test
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 order-md-2 mb-4">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-muted">
                                        Your order
                                    </span>
                                </h4>
                                {service && (
                                    <ul className="list-group mb-3 sticky-top">
                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <span>
                                                <img
                                                    src={Image2}
                                                    style={{
                                                        width: "50px",
                                                        margin:
                                                            "5px 10px 5px 0",
                                                    }}
                                                />
                                            </span>
                                            <div style={{ paddingRight: "5%" }}>
                                                <h6 className="my-0">
                                                    {service.title}
                                                </h6>
                                                <small className="text-muted">
                                                    Date Time: {service.date}
                                                    <br />
                                                    Location: {service.location}
                                                </small>
                                            </div>
                                            <span className="text-muted">
                                                £{amount.toFixed(2)}
                                            </span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Total</span>
                                            <strong>
                                                £{amount.toFixed(2)}
                                            </strong>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="col-md-7 order-md-1">
                                <h4 className="mb-3">Billing address</h4>
                                <form className="needs-validation" noValidate>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="firstName">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                name="firstname"
                                                onChange={handleFormInput}
                                                value={details.firstname}
                                                required
                                                disabled={detailsSubmitted}
                                            />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="lastName">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                name="lastname"
                                                onChange={handleFormInput}
                                                value={details.lastname}
                                                required
                                                disabled={detailsSubmitted}
                                            />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            onChange={handleFormInput}
                                            value={details.email}
                                            required
                                            disabled={detailsSubmitted}
                                        />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            placeholder="1234 Main St"
                                            name="address"
                                            onChange={handleFormInput}
                                            value={details.address}
                                            required
                                            disabled={detailsSubmitted}
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address2">
                                            Address 2{" "}
                                            <span className="text-muted">
                                                (Optional)
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address2"
                                            placeholder="Apartment or suite"
                                            name="address2"
                                            onChange={handleFormInput}
                                            value={details.address2}
                                            disabled={detailsSubmitted}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="state">
                                                Country/Region
                                            </label>
                                            <select
                                                className="custom-select d-block w-100"
                                                id="country"
                                                name="country"
                                                onChange={handleFormInput}
                                                value={details.country}
                                                required
                                                disabled={detailsSubmitted}
                                            >
                                                <option value="">
                                                    Choose...
                                                </option>
                                                {countries.map(
                                                    (country, index) => (
                                                        <option
                                                            key={index}
                                                            value={country}
                                                        >
                                                            {country}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid country.
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="zip">
                                                Postal Code
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zip"
                                                name="postal"
                                                onChange={handleFormInput}
                                                value={details.postal}
                                                required
                                                disabled={detailsSubmitted}
                                            />
                                            <div className="invalid-feedback">
                                                Postal code required.
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mb-4" />
                                    {detailsSubmitted ? (
                                        <>
                                            <h4 className="mb-3">Payment</h4>
                                            <small>
                                                <button
                                                    className="btn btn-link"
                                                    onClick={() =>
                                                        setDetailsSubmitted(
                                                            false
                                                        )
                                                    }
                                                    style={{ padding: 0 }}
                                                >
                                                    Edit your information
                                                </button>
                                            </small>
                                            <div>
                                                <button
                                                    className="btn btn-primary"
                                                    style={{
                                                        width: "100%",
                                                        margin: "10px 0",
                                                    }}
                                                    onClick={payWithStripe}
                                                >
                                                    {buttonLoading && (
                                                        <div
                                                            className="spinner-border"
                                                            role="status"
                                                        >
                                                            <span className="sr-only">
                                                                Loading...
                                                            </span>
                                                        </div>
                                                    )}
                                                    {!buttonLoading && (
                                                        <span>
                                                            Pay with Stripe
                                                        </span>
                                                    )}
                                                </button>
                                                <PayPalScriptProvider
                                                    options={{
                                                        "client-id": PAYPAL_CLIENT_ID,
                                                        currency: "GBP",
                                                    }}
                                                >
                                                    <PaypalButtonsCustomized
                                                        createOrder={
                                                            createOrder
                                                        }
                                                        onApprove={onApprove}
                                                        onCancel={onCancel}
                                                    />
                                                </PayPalScriptProvider>
                                            </div>
                                        </>
                                    ) : (
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                            onClick={handleSubmitDetails}
                                            style={{ width: "100%" }}
                                        >
                                            Proceed to Payment
                                        </button>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
};

const PaypalButtonsCustomized = ({ createOrder, onApprove, onCancel }) => {
    const [{ isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        const scriptProviderOptions = {
            "client-id": PAYPAL_CLIENT_ID,
        };

        dispatch({
            type: "resetOptions",
            value: {
                ...scriptProviderOptions,
                "data-order-id": Date.now(),
            },
        });
    }, [dispatch]);

    return (
        <>
            {isPending ? (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : null}
            <PayPalButtons
                style={{
                    layout: "vertical",
                    label: "pay",
                    height: 35,
                }}
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
                onCancel={(data) => onCancel(data)}
                onError={(err) => console.log(err)}
            />
        </>
    );
};

export default Checkout;