var mongoose =require("mongoose");
 mongoose.connect("mongodb+srv://nashath:nashath@cluster0.uko0p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


.then(()=>(console.log("coonected to db")))
.catch((err)=>(console.log(err)))