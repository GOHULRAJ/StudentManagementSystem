const express=require("express");
const exphbs=require("express-handlebars");
const bodyparser=require("body-parser");
const mysql=require("mysql");
const bodyParser = require("body-parser");

require('dotenv').config();
const app=express();
const port =process.env.port ||5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());

app.use(express.static("public"));

const handlebars=exphbs.create({extname:".hbs"});
app.engine("hbs",handlebars.engine);
app.set("view engine","hbs");

//MySQL
/*
const con=mysql.createPool({
    connectionLimit:10,
    host        :process.env.DB_HOST,
    user        :process.env.DB_USER,
    password    :process.env.DB_PASS,
    database    :process.env.DB_NAME,
    port        :process.env.DB_PORT

});
/*
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root"
});

con.connect(function(err){
    if(err)
    {
        console.log(err)
    }else{
        console.log("connected!")
    }
})


//check Database Connection
con.getConnection((err,connection)=>{
    if (err) throw err
    console.log("connection Success")
})
*/

//Routes
/*
app.get("/",(req,res)=>{
//res.render("home");
});
*/
const routes=require("./server/routes/students");
app.use("/",routes)

app.listen(port,()=>{
    console.log("listening Port:"+port);
});