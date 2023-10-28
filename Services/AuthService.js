import axios from "axios";
import { SERVER } from "@env";

const refreshToken = async () => {
  try {
    let tokenResponse = await axios.post(`${SERVER}/users/refresh-token`, {
      headers: authHeader(getToken()),
    });
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
