const Product = require("../models/Product");

exports.createProduct = async (req,res) => {
    try{
        let product;

        product = new Product(req.body);

        await product.save()
        res.send(product);


    }catch(error){
        console.log(error)
        res.status(500).send('error found')
    }
}

exports.findProduct = async (req,res) => {
    try{
        
        const products = await Product.find()
        res.json(products);

    }catch(error){
        console.log(error)
        res.status(500).send('error found')
    }
}

exports.updateProduct = async (req,res) => {
    try{
        
        const { name,category,adress,prize} = req.body;
        let product = await Product.findById(req.params.id);

        if(!product){
            res.status(404).json({ msg: 'Product not founded'})
        }

        product.name = name;
        product.category =category;
        product.adress = adress;
        product.prize = prize;

        product = await Product.findOneAndUpdate({_id: req.params.id},product,{new:true})
        res.json(product)


    }catch(error){
        console.log(error)
        res.status(500).send('error found')
    }
}

exports.getProduct = async (req,res) => {
    try{
        
        let product = await Product.findById(req.params.id);

        if(!product){
            res.status(404).json({ msg: 'Product not founded'})
        }

        res.json(product)


    }catch(error){
        console.log(error)
        res.status(500).send('error found')
    }
}

exports.deleteProduct = async (req,res) => {
    try{
        
        let product = await Product.findById(req.params.id);

        if(!product){
            res.status(404).json({ msg: 'Product not founded'})
        }

        await Product.findOneAndRemove({_id:req.params.id})
        res.json({msg: 'Product removed'})


    }catch(error){
        console.log(error)
        res.status(500).send('error found')
    }
}