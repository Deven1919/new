const express= require('express');
const router= express.Router();

router.get('/getdata',(req,res)=>{
    res.send("Getting the data")
})
router.post("/postdata",(req,res)=>{
    res.send("Posting the data")
})
router.patch("/update",(req,res)=>{
    res.send("updating data")
})
router.delete('/delete',(req,res)=>{
    res.send("Deleting data")
})

module.exports=router