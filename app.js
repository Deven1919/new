const express= require('express');
const app= express();
const port = 3000;

const postRouter= require("./Router/route")
app.use(express.json())
app.use('/entry',postRouter)
app.listen(port, ()=>{
    console.log(`Connected to port ${port}`)
})