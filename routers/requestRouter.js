const express = require("express");
const requestRoute = express.Router();
const {body,validationResult}= require("express-validator");
const requestSchema = require("../schemas/requestSchema");

requestRoute.post("/request",
    [
        body("name").isLength({ min: 5 }),
        body("email").isEmail(),
        body("number"),
        body("area")
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.array() })
        }
        try{
            await requestSchema.create({
                name: req.body.name,
                email: req.body.email,
                number:req.body.number,
                area:req.body.area
            });
            res.json({ success: true });
            // console.log(secPassword);
        } catch (error) {
            res.json({ success: false })
            console.log(error);
        }
    });
    requestRoute.get("/getallrequests",async(req,res)=>{
        try {
            alldata =await requestSchema.find({}),
            res.send({staus:"success", data:alldata})
            
        } catch (error) {
            console.log(error);
        }
    })
module.exports= requestRoute;