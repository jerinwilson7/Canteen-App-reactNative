import axios from "axios";
import { SERVER } from "@env";
import { getToken } from "../Store/Store";
import { authHeader } from "../utils/Generator";

const refreshToken = async () => {
  try {
    let token = await getToken();
    let tokenResponse = await axios.post(
      "http://192.168.28.203:3000/auth/refresh-token",
      {
        headers: authHeader(token),
      }
    );
    console.log(tokenResponse.data);
    if (tokenResponse?.status === 200) {
      return { status: true, data: tokenResponse?.data };
    } else {
      return { status: false };
    }
  } catch (error) {
    console.log(error);
    return { status: false, message: "Oops! Something went wrong" };
  }
};

export default { refreshToken };
