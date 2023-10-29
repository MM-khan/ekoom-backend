const express = require("express");
const app = express();
const port = 5000;
const ekoomDB =require("./dataBase")

ekoomDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(express.json())
  app.use("/contact",require("./routers/messagRouter.js"));
  app.use("/astimate", require("./routers/requestRouter"))
app.get("/",(req,res)=>{
    res.send("hello ekoom");
});

app.listen(port, () => {
    console.log(`ekoom app listening on port ${port}`)
  })