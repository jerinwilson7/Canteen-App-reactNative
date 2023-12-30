import axios from "axios";
import { server } from "../server/server";
import { authHeader } from "../utils/Generator";
import { getToken } from "../Store/Store";


const getCartItems =async()=>{
    console.log('cartService | getCartItems');

    try {
        let response = await axios.get(`${server}/cart/`,
        {
            headers:authHeader(getToken())
        })
        if (response?.status === 200) {
            return {
              status: true,
              message: `Cart data fetched`,
              data: response?.data?.data,
            };
          } else {
            return {
              status: false,
              message: `Cart data not found`,
            };
          }
    } catch (error) {
        return{
            status:false,
            message:'cart daa not found',
            error:error.message
        }
    }
}
const addToCart =async({food_id})=>{
    console.log('cartService | addToCart');

    try {
        let response = await axios.post(`${server}/cart/${food_id}`,
        {
            headers:authHeader(getToken())
        })
        if (response?.status === 200) {
            return {
              status: true,
              message: `food added to cart successfully`,
              data: response?.data?.data,
            };
          } else {
            return {
              status: false,
              message: `failed to add food to cart`,
            };
          }
    } catch (error) {
        return{
            status:false,
            message:'error adding food to cart',
            error:error.message
        }
    }
}
const removeFromCart =async({food_id})=>{
    console.log('cartService | removeFromCart');

    try {
        let response = await axios.delete(`${server}/cart/${food_id}`,
        {
            headers:authHeader(getToken())
        })
        if (response?.status === 200) {
            return {
              status: true,
              message: `food deleted from the cart successfully`,
              data: response?.data?.data,
            };
          } else {
            return {
              status: false,
              message: `failed to delete food from the cart`,
            };
          }
    } catch (error) {
        return{
            status:false,
            message:'error deleting food from the cart',
            error:error.message
        }
    }
}

export default {getCartItems,addToCart,removeFromCart}