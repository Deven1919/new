const mysql= require('mysql');
const con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"Student"
})
con.connect((err)=>{
    if (err) throw err;
    console.log("Database Connection Established!")
});



let getData= (req,res)=>{
    let {firstname , lastname}= req.body;
    let sql= `INSERT INTO student (firstname,lastname) VALUES ("${firstname}","${lastname}")`;
    con.query(sql,(err,data)=>{
     if (err) throw err;
     res.send(data)
    })
}
module.exports=getData