const express = require("express");
const app = express();
const path = require("path");
const port =8080;

// // Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
// view =>templates

app.set("views",path.join(__dirname,"/views"));



app.get("/",(req,res)=>
{
     res.render("home.ejs");
})

app.get("/home",(req,res)=>
{
    res.send("Hello");
})


//Passing data to EJS
app.get("/rolldice",(req,res)=>
{
    let diceVal= Math.floor(Math.random() *6+1)
     res.render("RollDice",{diceVal}); //passing diceval to views
});


app.listen(port,()=>
{
    console.log(`listening to port ${port}`);
})



// JUST EXAMPLE INSTA ROUTE
app.get("/:username",(req,res)=>
{
    const followers=["adam","bob","steve","abc"];
    let {username }= req.params;
    res.render("instagram",{username,followers});
})



// Cat Dog Example
app.get("/ig/:username",(req,res)=>
{
    let  {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username]
    // console.log(data);
    if(data)
    {
    res.render("CatDog",{data});
    }else{
        res.render("err");
    }
})


