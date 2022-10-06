const express = require('express')
const router = express.Router();
const urlController = require('../controller/urlController')





//--------Url Shorter API--------------------------
router.post('/url/shorten', urlController.createUrl )

//--------Get Url API--------------------------
router.get('/:urlCode', urlController.getUrl)





//---------API for Wrong route-------------
router.all('/*', function(req, res){
    res.status(400).send({status:false, msg: "Path Not Found"})
});



module.exports=router