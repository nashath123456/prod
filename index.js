var express = require("express");

var app = express()

var port=4000;

app.use(express.json());
require("./db");
const productModel = require("./model/product");
app.post("/",(req,res)=>{
    try{
        productModel(req.body).save();
        res.send("data added succesfully!!");
    }catch (error) {
        
        res.send(error);
    }
})

app.get(`/`,async(req,res)=>{
    try {
        var data = await productModel.find();
    res.send (data);

    } catch (error) {
        res.send(error);
    }})
    app.delete('/remove/:id',async(req,res)=>{
        console.log(req.params)
       try {  
    await productModel.findByIdAndDelete(req.params.id);
    res.send("deleted succesfully!!");
       } catch (error) {
        res.send(error)
          }
    })

app.listen(port,(req,res)=>{
    console.log(`server listening in port ${port}`)
});
    
