const express=require('express');
const router=express.Router();
const Item=require('../models/Producto');


//Registrar un producto
router.post('/',async(req,res)=>{
    try{
        const item=new Item(req.body);
        await item.save();
        res.status(201).json(item);

    }catch(error){
        res.status(400).json({ error: error.menssage});
}
})

//consultar todos los productos
router.get('/',async(req,res)=>{
    try{
        const items=await Item.find();
        res.json(items);

    }catch(error){
        res.status(500).json({ error: error.menssage});
}
})

//consultar prodcuto por id
router.get('/:id',async(req,res)=>{
    try{
        const items=await Item.findById(req.params.id);
        if (!item)return res.status(404).json({error: 'Producto no encontrado'});
        res.json(item);

    }catch(error){
        res.status(500).json({ error: error.menssage});
}
})
//modificar datos del producto 
router.get('/:id',async(req,res)=>{
    try{
        const items=await Item.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if (!item)return res.status(404).json({error: 'Producto no encontrado'});
        res.json(item);

    }catch(error){
        res.status(500).json({ error: error.menssage});
}
})
//eliminar un producto 

router.delete('/:id',async(req,res)=>{
    try{
        const items=await Item.findByIdAndUpdate(req.params.id);
        if (!item)return res.status(404).json({error: 'Producto no encontrado'});
        res.json(items);
    
    }catch(error){
        res.status(500).json({ error: error.menssage})
    }
});

module.exports=router;
