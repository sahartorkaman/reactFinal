import { fetchLocations } from "../api/locations";

export const getLocations = () => {
    return async (dispatch) => {
        const locations = await fetchLocations();
        await dispatch({ type: "INIT", payload: locations });
    };
};

export const userAction = (user) => {
    return async (dispatch) => {
        await dispatch({ type: "USER", payload: user });
    };
};
