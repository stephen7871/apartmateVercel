import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()






    // const handleSubmitt = async (e) => {
    //     e.preventDefault();
    //     const config = {
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //     };
  
  
        
    //        const formdata = new FormData();
           
    //        for ( let i = 0; i < image.length; i++ ) {
    //         formdata.append( "imagecropped", image[ i ], image[ i ].name );
    //       }
    //       console.log(JSON.stringify(image) + "image")
    //         const collegesel = await JSON.parse(localStorage.getItem("autoselectval"));
    //           //   // {photos: formdata, address: postData.address, nbedrooms: nbedroomss, pricepermonth: postData.pricepermonth, description: postData.description,username: user?.username, typeofplace: selectval, nroomates: roomatenum, typeofpost: 'Apartment and Roomate', collegename: collegesel.title},
    //       formdata.append("address", postData.address)
    //       formdata.append("nbedrooms", nbedroomss)
    //       formdata.append("pricepermonth", postData.pricepermonth)
    //       formdata.append("description", postData.description)
    //       formdata.append("username", user?.username)
    //       formdata.append("typeofplace", selectval)
    //       formdata.append("nroomates", roomatenum)
    //       formdata.append("typeofpost", 'Apartment and Roomate')
    //       formdata.append("collegename", collegesel.title)
    //        await axios.post("/posts", formdata, { headers: {
    //                   'accept': 'application/json',
    //                   'Content-Type': 'multipart/form-data'
    //               }})
         
    //     if (currentId === 0) {
      
    //       clear();
    //     } else {
          
    //       clear();
    //     }
    //   };


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("/payment", {
                amount: 1000,  ///this is in cents
                id
            })
            // const formdata = new FormData();
            // formdata.append("amount", "1000")
            // formdata.append("id", id)
    

            // const response = await axios.post("http://localhost:5001/payment",formdata, { headers: {
            //     'content-type': 'application/json'
               
            // }})
                
            

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
       <div>
           <h2>Successful payment</h2>
       </div> 
        }
            
        </>
    )
}
