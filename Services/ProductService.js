import axios from "axios";
import { authHeader } from "../utils/Generator";
import { getToken } from "../Store/Store";
import { server } from "../server/server";

const getProductsData = async () => {
  console.log(`ProductService | getProductsData`);
  try {
    let token = await getToken();

    let productResponse = await axios.get(`${server}/admin/get-all-products`, 
    {
      headers: authHeader(token),
    });

    if (productResponse?.status === 200) {
      return {
        status: true,
        message: `Product data fetched`,
        data: productResponse.data,
      };
    } else {
      return {
        status: false,
        message: `Product data not found`,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: error?.response?.data?.message
        ? error?.response?.data?.message
        : `Product data not found`,
    };
  }
};

export default { getProductsData };
