const express = require('express');
const router = express.Router()

const {calculator} = require('../controllers/calculator');

router.post('/',(req,res, next) => {
    console.log("POst bespoke" + calculator)
    //return calculator()
    // res.status(200).send(calculator())
    // res.status(400).json({error: "something went wrong"})
    next()
})

module.exports=router