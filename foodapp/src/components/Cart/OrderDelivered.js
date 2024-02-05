import { Fragment } from "react";
import classes from "./Cart.module.css";

const OrderDelivered = (props) => {
  return (
    <Fragment>
      <section>
      <h4> Your order is being processed</h4>
        <h2>Thank you so much for your order!</h2>

       
        <p>
          THANK YOU! 
        </p>
      </section>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );
};

// // export default OrderDelivered;
// // import React, { Fragment } from "react";
// // import PaymentButton from "../../payment/Payment";
// // import classes from "./Cart.module.css";

// // const OrderDelivered = (props) => {
// //   const makePayment = (response) => {
// //     // Handle the payment success response here
// //     console.log(response);
// //     // Perform any necessary actions after successful payment
// //   };

// //   return (
// //     <Fragment>
// //       <section>
// //         {/* <h4>Your order is being processed</h4>
// //         <h2>Thank you so much for your order!</h2>
// //         <p>We really appreciate it.</p>
// //         <p>THANK YOU!</p> */}
// //         <PaymentButton onSuccess={makePayment} />
// //       </section>
// //       <div className={classes.actions}>
// //         <button className={classes["button--alt"]} onClick={props.onClose}>
// //           Close
// //         </button>
// //       </div>
// //     </Fragment>
// //   );
// // };

export default OrderDelivered;






// import React from 'react';
// import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

// export default function OrderDelivered() {
//   const config = {
//     public_key: process.env.REACT_APP_PUBLIC_KEY,
//     tx_ref: Date.now(),
//     amount: 100,
//     currency: 'NGN',
//      payment_options: "card, mobilemoney,ussd",
//     // payment_plan="3341",
//     customer: {
//       email: 'user@gmail.com',
//       phone_number: '070********',
//       name: 'john doe',
//     },
//     // meta :{ counsumer_id: "7898", consumer_mac: "kjs9s8ss7dd" },
//     customizations: {
//       title: 'my Payment Title',
//       description: 'Payment for items in cart',
//       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//     },
//   };


//   const handleFlutterPayment = useFlutterwave(config);


//   return (
//     <div className="">
     

//       <button
//         onClick={() => {
//           handleFlutterPayment({
//             callback: (response) => {
//                console.log(response);
//                 closePaymentModal() // this will close the modal programmatically
//             },
//             onClose: () => {},
//           });
          
//         }}
//       >
//         Payment with React hooks
//       </button>
//     </div>
//   );
//       }