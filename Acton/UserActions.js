import UserServices from "../Services/UserServices";

const types = {
    GET_USER_DATA: "GET_USER_DATA",
    SET_IS_LOADING: "SET_IS_LOADING"
};

const getUser = () => {
    console.log("get-user");
    return dispatch => {
        dispatch({
            type: types.SET_IS_LOADING,
            payload: true
        });
        UserServices.getUserData().then(userResponse => {
            dispatch({
                type: types.GET_USER_DATA,
                payload: userResponse?.data
            });
            dispatch({
                type: types.SET_IS_LOADING,
                payload: false
            });
        })
        .catch(() => {
            dispatch({
                type: types.SET_IS_LOADING,
                payload: false
            });
        });
    };
}

export default { types, getUser };
