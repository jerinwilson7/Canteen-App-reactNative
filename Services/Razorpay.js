import { RAZORPAY_KEY_ID, RAZORPAY_SECRET_KEY } from "@env";
import RazorpayCheckout from "react-native-razorpay";

const razorPayPayment = (total) => {
  return new Promise((resolve, reject) => {

  const razorPayKeyId = "rzp_test_Z30BGEehteYBgV";
  const razorPaySecretKey = "foFX1okXsCus9w1Dr5LGBKVM";
 

  const currency = "INR";
    const amount = total;


  var options = {
    description: "",
    image: "",
    currency: currency,
    key: razorPayKeyId,
    amount: amount * 100,
    name: "testOrder",
    order_id: "", //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
    prefill: {
      email: "xyz@gmail.com",
      contact: "9999999999",
      name: "User 1",
    },
    theme: { color: "#8F00FF" },
  };


    RazorpayCheckout.open(options)
      .then((data) => {
        console.log(options)
        console.log("data"+JSON.stringify(data));
        const paymentResponse = {
          status: true,
          message: "payment success",
          data:{
            paymentId :data.razorpay_payment_id,
            amountTotal:options.amount,
          }
        };
        resolve(paymentResponse);
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // console.log(error);
        const paymentResponse = {
          status: false,
          message: "payment failed",
        };
        reject(paymentResponse);
        // alert(`Error: ${error.code} | ${error.description}`);
      });
  });
};

export default { razorPayPayment };
