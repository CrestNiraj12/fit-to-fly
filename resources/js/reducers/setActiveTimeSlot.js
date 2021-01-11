import { ACTIVE_TIME_SLOT } from "../constants";

export default (state = "", action) => {
    switch (action.type) {
        case ACTIVE_TIME_SLOT:
            return action.payload;
        default:
            return state;
    }
};
