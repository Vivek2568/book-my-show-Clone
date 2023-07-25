import React from "react";
const LaunchRazorPay =()=>{
    let options={
        key: "rzp_test_sHS81dYz9G0g0a",
        amount: 1000,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Purchase On Rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: ()=>{
            alert("Payment Done")
        },
        theme: {color:"#c4242d"
        }
     
    };
    let rzp= new window.Razorpay(options);
    rzp.open();
}
export default LaunchRazorPay;
