import axios from "axios";
import { server } from "../server/server";
import { authHeader } from "../utils/Generator";
import { getToken } from "../Store/Store";


const getCartItems =async()=>{
    console.log('cartService | getCartItems');

    const token = await getToken();

    try {
        let response = await axios.get(`${server}/cart/`,
        {
            headers:authHeader(token)
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
      console.log(error)

        return{
            status:false,
            message:'cart daa not found',
            error:error.message
        }
    }
}
// const addToCart =async({foodId})=>{
//     console.log(foodId)
//     console.log('cartService | addToCart');

//     const token = await getToken();
//     console.log("add:"+token)


//     try {
//         let response = await axios.post(`${server}/cart/${foodId}`,
//         {
//           headers: authHeader(token),
//         })
//         if (response?.status === 200) {
//             return {
//               status: true,
//               message: `food added to cart successfully`,
//               data: response?.data?.data,
//             };
//           } else {
//             return {
//               status: false,
//               message: `failed to add food to cart`,
//             };
//           }
//     } catch (error) {
//         return{
//             status:false,
//             message:'error adding food to cart',
//             error:error.message
//         }
//     }
// }

const addToCart = async ({ foodId }) => {
  console.log(foodId);
  console.log('cartService | addToCart');

  const token = await getToken();
  console.log("add:" + token);

  try {
    let response = await axios.post(
      `${server}/cart/${foodId}`,
      {}, // Empty data object as the second parameter
      {
        headers: {
          ...authHeader(token), // Spread the headers object returned from authHeader function
        },
      }
    );
    if (response?.status === 200) {
      return {
        status: true,
        message: `Food added to cart successfully`,
        data: response?.data?.data
      };
    } else {
      return {
        status: false,
        message: `Failed to add food to cart`,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: 'Error adding food to cart',
      error: error.message,
    };
  }
};

const removeFromCart =async({foodId})=>{
    console.log('cartService | removeFromCart');

    try {
        let response = await axios.delete(`${server}/cart/${foodId}`,
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