const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.createProduct);

router.get('/',productController.findProduct);

router.put('/:id',productController.updateProduct);

router.get('/:id',productController.getProduct);

router.delete('/:id',productController.deleteProduct);
/*
router.post('/', ()=>{
    console.log('Creating ..')
})
*/

module.exports = router;