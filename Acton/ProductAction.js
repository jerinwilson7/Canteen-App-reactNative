import ProductService from "../Services/ProductService";

const types = {
    GET_PRODUCT_DATA: "GET_PRODUCT_DATA",
    SET_IS_LOADING: "SET_IS_LOADING"
};

const getProducts = () => {
    console.log("get-products");
    return dispatch => {
        dispatch({
            type: types.SET_IS_LOADING,
            payload: true
        });
        ProductService.getProductsData().then(productResponse => {
            console.log(productResponse.data.length)
            
            dispatch({
                type: types.GET_PRODUCT_DATA,
                payload: productResponse.data
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

export default { types, getProducts };
