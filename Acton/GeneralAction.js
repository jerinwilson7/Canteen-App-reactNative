import { AuthService } from "../Services";
import StorageService from "../Services/StorageService";
import UserServices from "../Services/UserServices";

const types = {
  SET_IS_APP_LOADING: "SET_IS_APP_LOADING",
  SET_TOKEN: "SET_TOKEN",
  SET_FIRST_TIME_USE: "SET_FIRST_TIME_USE",
  SET_USER_DATA: "SET_USER_DATA",
};

const setIsAppLoading = (isAppLoading) => {
  return {
    type: types.SET_IS_APP_LOADING,
    payload: isAppLoading,
  };
};

const setToken = (token) => {
  return {
    type: types.SET_TOKEN,
    payload: token,
  };
};

const setIsFirstTimeUse = () => {
  return {
    type: types.SET_FIRST_TIME_USE,
    payload: false,
  };
};

const appStart = () => {
  return (dispatch, getState) => {
    StorageService.getFirstTimeUse().then((isFirstTimeUse) => {
      dispatch({
        type: types.SET_FIRST_TIME_USE,
        payload: isFirstTimeUse ? false : true,
      });
    });
    StorageService.getToken().then((token) => {
      if (token) {
        dispatch({
          type: types.SET_TOKEN,
          payload: token,
        });
        UserServices.getUserData().then((res) => {
          // console.log("status", res.data.message);
          if (res.data.status) {
            dispatch({
              type: types.SET_USER_DATA,
              payload: res.data,
            });
            dispatch({
              type: types.SET_IS_APP_LOADING,
              payload: false,
            });
          } else if (res.data.message == "TokenExpiredError") {
            console.log("refresh-action");
            AuthService.refreshToken().then((tokenResponse) => {
              if (tokenResponse.status) {
                dispatch({
                  type: types.SET_TOKEN,
                  payload: tokenResponse.data,
                });
                if (res.status) {
                  dispatch({
                    type: types.SET_USER_DATA,
                    payload: res.data,
                  });
                  dispatch({
                    type: types.SET_IS_APP_LOADING,
                    payload: false,
                  });
                }
              } else {
                dispatch({
                  type: types.SET_TOKEN,
                  payload: "",
                });
                dispatch({
                  type: types.SET_IS_APP_LOADING,
                  payload: false,
                });
              }
            });
          }
        });
      }
    });
    dispatch({
      type: types.SET_IS_APP_LOADING,
      payload: false,
    });
  };
};

export default {
  setIsAppLoading,
  setToken,
  appStart,
  setIsFirstTimeUse,
  types,
};
