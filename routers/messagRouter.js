const express = require("express");
const messageroute = express.Router();
const {body,validationResult}= require("express-validator");
const messageSchema = require("../schemas/massageSchema");

messageroute.post("/usermessage",
    [
        body("name").isLength({ min: 5 }),
        body("email").isEmail(),
        body("subject"),
        body("message")
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.array() })
        }
        try{
            await messageSchema.create({
                name: req.body.name,
                email: req.body.email,
                subject:req.body.subject,
                message:req.body.message
            });
            res.json({ success: true });
            // console.log(secPassword);
        } catch (error) {
            res.json({ success: false })
            console.log(error);
        }
    });

    messageroute.get("/getalldata",async(req,res)=>{
        try {
            alldata =await messageSchema.find({}),
            res.send({staus:"success", data:alldata})
            
        } catch (error) {
            console.log(error);
        }
    })
module.exports= messageroute;