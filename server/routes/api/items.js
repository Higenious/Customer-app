const express = require('express');
const router =  express.Router();


//Items Model

const Item =  require('../../models/items');


//Get Items
router.get('/', (req, res) =>{
    Item.find().sort({date: -1}).then(Items => res.json(Items))
});


//POst Items
router.post('/',(req, res) =>{
    const newItems = new Item({ name : req.body.name});

    newItems.save().then(Item => res.json(Item));

});


//Delete Items
router.delete('/:id',(req, res) =>{
    Item.findById(req.params.id)
    .then(item => item.remove().then( ()=> res.json({success : true})) )    

    .catch(err => res.status(404).json({success: false}));

})

module.exports = router;
