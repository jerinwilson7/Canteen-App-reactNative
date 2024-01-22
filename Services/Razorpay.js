import { RAZORPAY_KEY_ID, RAZORPAY_SECRET_KEY } from "@env";
import RazorpayCheckout from "react-native-razorpay";

const razorPayPayment = (total) => {
  console.log("raz"+total);

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

  console.log("object")

  RazorpayCheckout.open(options)
  .then((data) => {
    console.log(options); // Move the console.log statement here if needed
    console.log(data);
    alert(`Success: ${data.razorpay_payment_id}`);
  })
 


  // RazorpayCheckout.open(options)
  // console.log(options)
  // .then((data)=>{
  //   console.log(data);
  //      alert(`Success: ${data.razorpay_payment_id}`);
  // })

//   Razo.open(options)
//     .then((data) => {
//       // handle success
//       console.log(data);
//       alert(`Success: ${data.razorpay_payment_id}`);
//     })
    .catch((error) => {
      // handle failure
      console.log(error);
      alert(`Error: ${error.code} | ${error.description}`);
    });
};

export default { razorPayPayment };
