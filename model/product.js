const mongoose =require("mongoose");
const productSchema = mongoose.Schema({
    productName:String,
    productcat:String,
    productprize: Number,
    productquantity:Number
});
var productModel =mongoose.model("product",productSchema)
    module.exports=productModel;