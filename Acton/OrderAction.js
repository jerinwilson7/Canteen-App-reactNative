import { PlaceOrderService } from "../Services";

const types = {
    GET_ORDER_DATA: "GET_ORDER_DATA",
    SET_IS_LOADING: "SET_IS_LOADING"
};

const getOrder = ()=>{
    console.log("get-userOrder");
    return dispatch => {
        dispatch({
            type: types.SET_IS_LOADING,
            payload: true
        });
        PlaceOrderService.getUserOrders().then(orderResponse => {
            dispatch({
                type: types.GET_ORDER_DATA,
                payload: orderResponse
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

export default {getOrder,types}