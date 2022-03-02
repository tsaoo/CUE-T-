const express = require('express');
const router = express.Router();
const GasModel = require('../models/block')

router.get('/GET', function(req, res){
    res.send({type: 'CreateGas'});
    
    
});

module.exports = router;