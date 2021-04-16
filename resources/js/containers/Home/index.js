import React from "react";
import Tick from "../../../images/tick.png";
import Airplane from "../../../images/airplane.png";
import Calendar from "../../../images/calendar.jpg";
import BookCard from "../../components/BookCard";
import Footer from "../../components/Footer";

const FitToFly = () => {
    return (
        <>
            <header
                className="bg-dark"
                style={{
                    height: 300,
                    background: `url(https://cdn.shopify.com/s/files/1/0101/6214/3283/t/59/assets/covid-header.jpg?v=8867273798966894294) bottom center / cover`,
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-12">
                            <h1 className="display-6 text-black mt-5 mb-2">
                                Fit to Fly Covid-19 Test
                            </h1>
                            <p className="checked">
                                <img
                                    style={{ width: 18 }}
                                    src="https://cdn.shopify.com/s/files/1/0101/6214/3283/t/51/assets/check.svg"
                                    alt="checked"
                                />{" "}
                                Government-approved provider
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div
                    className="row"
                    style={{ margin: "0 -15px", padding: "5rem 0 3rem 0" }}
                >
                    <div
                        className="col-md-8 mb-5"
                        style={{ paddingRight: "7.5%" }}
                    >
                        <h2>How To Get Tested For COVID-19</h2>

                        <hr style={{ margin: "25px 0" }} />
                        <div style={{ margin: "40px 0" }}>
                            <h4>Book Online or Visit Branch</h4>
                            <p style={{ fontSize: 16 }}>
                                Choose the time that best suits you from our
                                easy to use online booking portal. Alternatively
                                pop into any store.
                            </p>
                        </div>
                        <div style={{ margin: "40px 0" }}>
                            <h4>Get Tested in 5 mins</h4>
                            <p style={{ fontSize: 16 }}>
                                Visit your pharmacy of choice and get your swab
                                sample taken by a healthcare professional.
                            </p>
                        </div>

                        <div style={{ margin: "40px 0" }}>
                            <h4>Receive your certificate</h4>
                            <p style={{ fontSize: 16 }}>
                                Your sample is analysed and you'll receive a
                                secure verifiable certificate of your test
                                results via email.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5" id="testingSites">
                        <h2>Our Testing Sites</h2>
                        <hr style={{ margin: "25px 0" }} />
                        <address>
                            <img
                                src="https://i.imgur.com/k3bQxs1.png"
                                alt="Woolwich Late Night Pharmacy"
                                className="logoSites"
                            />
                            <strong>Woolwich Late Night Pharmacy</strong>
                            <p>
                                Lower Ground Floor, Equitable House 10 Woolwich
                                New Road, SE18 6AB
                                <br />
                                Phone:{" "}
                                <a href="tel:02083167977">020 8316 7977</a>
                                <br />
                                Opening Hours: Monday - Friday: 07:30 AM - 10:30
                                PM, Saturday: 08:00 AM - 09:00 PM, Sunday: 08:00
                                AM - 08:00 PM
                            </p>
                        </address>
                        <address>
                            <img
                                src="https://imgur.com/ACRsP2Y.jpg"
                                alt="Plumstead Pharmacy"
                                className="logoSites"
                            />
                            <strong>Plumstead Pharmacy</strong>
                            <p>
                                9 Wickham Lane, Plumstead, London, SE2 0XJ
                                <br />
                                Phone:{" "}
                                <a href="tel:02083110636">020 8311 0636</a>
                                <br />
                                Opening Hours: Monday - Friday: 09:00 AM - 06:00
                                PM, Saturday: 09:00 AM - 01:00 PM, Sunday:
                                Closed
                            </p>
                        </address>
                        <address>
                            <img
                                src="https://imgur.com/kxlQDwL.png"
                                alt="Neem Tree Pharmacy"
                                className="logoSites"
                            />
                            <strong>Neem Tree Pharmacy</strong>
                            <p>
                                110 Mcleod Road, London SE2 0BS
                                <br />
                                Phone:{" "}
                                <a href="tel:02083119003">020 8311 9003</a>
                                <br />
                                Opening Hours: Monday - Friday: 09:00 AM - 06:00
                                PM, Saturday: 09:00 AM - 01:00 PM, Sunday:
                                Closed
                            </p>
                        </address>
                    </div>
                </div>

                <div className="row">
                    <div
                        className="col-md-12 mb-5"
                        style={{ textAlign: "center" }}
                    >
                        <h6 style={{ letterSpacing: "1px" }}>
                            BE TESTED IN OUR APPROVED CENTRES
                        </h6>
                    </div>
                    <div
                        className="col-md-4 mb-5"
                        style={{ textAlign: "center" }}
                    >
                        <div className="col-md-12 mb-5">
                            <img
                                className="card-img-top"
                                src={Tick}
                                alt="Government approved"
                                style={{ width: "40px" }}
                            />
                        </div>
                        <div className="col-md-12 mb-5">
                            <h5 className="card-title">
                                UK Government Approved
                            </h5>
                        </div>
                    </div>
                    <div
                        className="col-md-4 mb-5"
                        style={{ textAlign: "center" }}
                    >
                        <div className="col-md-12 mb-5">
                            <img
                                className="card-img-top"
                                src={Airplane}
                                alt="Fit to fly certificate"
                                style={{ width: "40px" }}
                            />
                        </div>
                        <div className="col-md-12 mb-5">
                            <h5 className="card-title">
                                Fit-to-Fly Certificate
                            </h5>
                        </div>
                    </div>
                    <div
                        className="col-md-4 mb-5"
                        style={{ textAlign: "center" }}
                    >
                        <div className="col-md-12 mb-5">
                            <img
                                className="card-img-top"
                                src={Calendar}
                                alt="Government approved"
                                style={{ width: "40px" }}
                            />
                        </div>
                        <div className="col-md-12 mb-5">
                            <h5 className="card-title">
                                Results from 4 Hours
                                <br />
                                (Depending upon the service)
                            </h5>
                        </div>
                    </div>
                </div>
                <div
                    className="row"
                    id="bookTest"
                    style={{
                        justifyContent: "center",
                        margin: "50px 0",
                    }}
                >
                    <BookCard />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FitToFly;
