import { ACTIVE_TIME_SLOT } from "../constants";

export const setActiveTimeSlot = (active) => ({
    type: ACTIVE_TIME_SLOT,
    payload: active,
});
