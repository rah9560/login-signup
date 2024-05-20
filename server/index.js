const express=require("express")
const app=express()
const cors =require("cors")
const dbconnect=require("./database")
const Model=require("./models/models")
dbconnect();

app.use(express.json())
app.use(cors())

app.post("/",(req,res)=>{
    Model.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    Model.findOne({email:email})
    .then(user=> {
        if(user){
            if(user.password=== password){
                res.json("success")
            }else{
                res.json("wrong password")
            }
        }else{
            res.json("you are not registered user please register")
        }
    })
})

app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})