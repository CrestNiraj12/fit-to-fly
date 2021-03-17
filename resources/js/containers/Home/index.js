import React from "react";
import Tick from "../../../images/tick.png";
import Airplane from "../../../images/airplane.png";
import Calendar from "../../../images/calendar.webp";
import BookCard from "../../components/BookCard";
import Image from "../../../images/image1.jpg";
import Footer from "../../components/Footer";

const FitToFly = () => {
    return (
        <>
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
                <div
                    className="row"
                    style={{ margin: "5rem -15px 3rem -15px" }}
                >
                    <div
                        className="col-md-8 mb-5"
                        style={{ paddingRight: "7.5%" }}
                    >
                        <h2>How To Get Tested For COVID-19</h2>
                        <hr style={{ margin: "25px 0" }} />
                        <h6>Book Online or Visit Branch</h6>
                        <p>
                            Choose the time that best suits you from our easy to
                            use online booking portal. Alternatively pop into
                            any store.
                        </p>
                        <h6>Get Tested in 5mins</h6>
                        <p>
                            Visit your pharmacy of choice and get your saliva
                            sample taken by a healthcare professional.
                        </p>
                        <h6>Receive your certificate</h6>
                        <p>
                            Your sample is analysed and you'll receive a secure
                            verifiable certificate of your test results via
                            email.
                        </p>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h2>Our Testing Sites</h2>
                        <hr style={{ margin: "25px 0" }} />
                        <address>
                            <strong>Woolwich Late Night Pharmacy</strong>
                            <p>
                                Lower Ground Floor, Equitable House 10 Woolwich
                                New Road, SE18 6AB
                                <br />
                                Phone: 020 8311 0636
                                <br />
                                Hours: Monday - Friday 07:30 AM - 10:30 PM,
                                Saturday 08:00 AM - 09:00 PM
                            </p>
                        </address>
                        <address>
                            <strong>Plumstead Pharmacy</strong>
                            <p>
                                9 Wickham Lane, Plumstead, London, SE2 0XJ
                                <br />
                                Phone: 020 7590 9995
                                <br />
                                Hours: Monday to Sunday: 09:00 AM - 11:00 PM
                            </p>
                        </address>
                        <address>
                            <strong>Neem Tree Pharmacy</strong>
                            <p>
                                110 Mcleod Road, London SE2 0BS
                                <br />
                                Phone: 020 8311 9003
                                <br />
                                Hours: Monday: 9:00 AM - 6:00 PM, Tuesday: 9:00
                                AM - 6:00 PM, Wednesday: 9:00 AM - 6:00 PM,
                                Thursday: 9:00 AM - 6:00 PM, Friday: 9:00 AM -
                                6:00 PM, Saturday: 9:00 AM - 1:00 PM
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
                            <h5 className="card-title">Results in 24 hours</h5>
                        </div>
                    </div>
                </div>
                <div
                    className="row"
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
