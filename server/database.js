const mongoose=require("mongoose")

const dbconnect=async()=>{
    try{
        const connect= await mongoose.connect("mongodb+srv://yadavrahul4186:Password9560@cluster0.bet5jkj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database successfully connected",connect.connection.host,connect.connection.name);
    }
    catch(error){
        console.log(error);
    }
}
module.exports=dbconnect;