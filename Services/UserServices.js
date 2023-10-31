import axios from "axios";
import { SERVER } from "@env";
import { authHeader } from "../utils/Generator";
import { getToken } from "../Store/Store";

const getUserData = async () => {
  console.log("user Services | getUserData");

  try {
    let userResponse = await axios.get(`${SERVER}/users/get-user`, {
      headers: authHeader(getToken()),
    });
    if (userResponse.status === 200) {
      console.log(userResponse);
      return {
        status: true,
        message: `User data fetched`,
        data: userResponse.data,
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
      message: error.response.data.message
        ? error.response.data.message
        : `User data not found`,
    };
  }
};

export default { getUserData };
