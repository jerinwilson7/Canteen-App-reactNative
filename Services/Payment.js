import axios from "axios";
import { server } from "../server/server";

const stripePayment = async()=>{
    const response = await axios.post(`${server}/payment`, {
        
        body: JSON.stringify({
          amount:Math.floor(total * 100),
  
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
}