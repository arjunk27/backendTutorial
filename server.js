const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51JmilMCK0STRbfYrztb5AtWt3gn9qcRGPa9TtSnmflDVpz0Er5cFOgoSNuypyHrjZ5jf6FgeKrN6PHm2it7s5m2o002Ubih3G4"
);
const tasks = require("./routes/tasks");

const PORT = 5000;

app.get("/", (req, res) => res.send("Welcome to backend tutorial"));

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};
startServer();

// app.post("/create_setup_intent", async (req, res) => {
//   const intent = await stripe.setupIntents.create({
//     payment_method_types: ["card_present"],
//     customer: "test123",
//   });
//   res.json({ id: intent.id, client_secret: intent.client_secret });
// });

// const test1 = async () => {
//   //   const retrievedCustomer = await stripe.customers.retrieve("test123");
//   //   const intent = await stripe.setupIntents.create({
//   //     payment_method_types: ["card_present"],
//   //     customer: "gcus_1KxrkOCK0STRbfYrVokp2Xrc",
//   //   });
//   console.log(retrievedCustomer);
// };

// const test = async () => {
//   const paymentMethods = await stripe.customers.listPaymentMethods("AY002067", {
//     type: "card",
//   });
//   //   console.log(paymentMethods.data[0].billing_details);
//   //   console.log(paymentMethods.data[0].card);
//   console.log(paymentMethods.data[0]);
// };
// test();

// seti_1KyV0ZCK0STRbfYrkpHEQRsz;
