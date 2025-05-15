const mongoose=require('mongoose');


const clienteSchema=new mongoose.Schema({
    nombre:{type:String,require:true},
    correo:String,
    creadoEn:{type:Date,default:Date.now}
});

module.exports=mongoose.model('cliente',clienteSchema)
