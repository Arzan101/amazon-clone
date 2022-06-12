const functions = require("firebase-functions");
const express = require("express"); // npm i express
const cors = require("cors"); // npm i cors (cross origin resourse sharing)
const stripe = require("stripe") ("sk_test_51KZRkQSHV4CwkIjNKPpmd6J4r35VaJmniTLGWsvYKgsrKoYKkvwC5C3NpGPA5aF7nO8sZA85WOBBqlcLGfutCRGr00HEVbaxAU");// -npm i stripe 

// -API


// -App config //Setting up Express server
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// - API Routes
app.get('/', (request, response)=>response.status(200).send('hello world'));
app.post('/payment/create', async(request, response)=>{
   const total = request.query.total;
   console.log("Total payment received>>", total);
   const paymentIntent = await stripe.paymentIntent.create({
    amount : total, // -Paise wali value mai dega rupee mai nhi
    currency:"inr",
   });

   response.status(201).send({
      clientSecret: paymentIntent.client-secret,
   })
})

// -Listen Command

exports.api = functions.https.onRequest(app);

// - In terminal firebase emulators:start

// -Endpoint
// -http://localhost:5001/clone-a4bf9/us-central1/api