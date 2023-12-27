const express=require("express")
const userRoute=require("./user.route");
const paymentRoute=require("./payment.route");
const tokenRoute=require("./token.route");

const router =express.Router();

router.use("/user",userRoute);
router.use("/payment",paymentRoute)
router.use("/token",tokenRoute)

module.exports=router;