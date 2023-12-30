import axios from "axios";
import { authHeader } from "../utils/Generator";
import { getToken } from "../Store/Store";
import { server } from "../server/server";

const getUserData = async () => {
  console.log(`UserService | getUserData`);
  try {
    let token = await getToken();

    let userResponse = await axios.get(`${server}/users/get-user`, 
    {
      headers: authHeader(token),
    });

    if (userResponse?.status === 200) {
      return {
        status: true,
        message: `User data fetched`,
        data: userResponse?.data,
      };
    } else {
      return {
        status: false,
        message: `User data not found`,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: error?.response?.data?.message
        ? error?.response?.data?.message
        : `User data not found`,
    };
  }
};

export default { getUserData };
