import axios from "axios"
import { server } from "../server/server"
import { getToken } from "../Store/Store"
import { authHeader } from "../utils/Generator";

const placeOrder = async(data)=>{
    try {
        const token = getToken();
        const response = await axios.post(`${server}/order/place-order`,data,
        {
            headers: authHeader(token)
        })
        console.log("res"+response)
        console.log("data"+response.data.message)
        // console.log("res"+response)
        return {
            status:200,
            message:response.data.message
        }
    } catch (error) {
        console.log("placeOrderError"+error)
    }
   
}

export default  {placeOrder}