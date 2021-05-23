import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setActiveTimeSlot } from "../../actions";

const mapStateToProps = (state) => ({
    activeTimeSlot: state.activeTimeSlot,
});

const mapDispatchToProps = (dispatch) => ({
    setActiveTimeSlot: (active) => dispatch(setActiveTimeSlot(active)),
});

const TimeSlot = ({
    time,
    setSelectedTime,
    activeTimeSlot,
    setActiveTimeSlot,
    setSelectedOption,
    option,
    booked,
}) => {
    useEffect(() => {
        if (localStorage.getItem("confirmBookDate") === "true") {
            setActiveTimeSlot(localStorage.getItem("selectedTime"));
        }
    }, []);

    const handleTimeClick = () => {
        if (
            option.includes("Results within 4 hrs") &&
            (time < "10:00" || time > "16:30")
        ) {
            setSelectedOption("");
            alert(
                "4 hours option is only available between 10:00 AM to 16:30 PM"
            );
        }
        setSelectedTime(time);
        setActiveTimeSlot(time);
    };

    return (
        time !== "" && (
            <div
                className="col-md-6"
                style={{ padding: "0 3px" }}
                id={time.split(" ").join("")}
            >
                <button
                    className={`timeSlot ${booked ? "disabled" : ""}`}
                    onClick={handleTimeClick}
                    style={{
                        backgroundColor:
                            activeTimeSlot === time ? "#0cca00" : "#d2d2d2",
                        outline: "none",
                    }}
                    disabled={booked}
                >
                    {time}
                </button>
            </div>
        )
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlot);
