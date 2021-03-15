import React from "react";
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
    booked,
}) => {
    const handleTimeClick = () => {
        setSelectedTime(time);
        setActiveTimeSlot(time);
    };

    return (
        <div className="col-md-6" style={{ padding: "0 3px" }}>
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
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlot);
