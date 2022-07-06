const express = require('express')
const mongo= require('mongoose')
const bodyParser = require('body-parser')
const evn= require('dotenv').config()

const app = express() // It will access all the methods from express

app.get('/',(req,res)=>{
    res.send(`Hello you just accessed ${'/'} port`)
})
// We need to encode the url
app.use(bodyParser.urlencoded({extended:true}))

// You need to create an key:value pair schema 

const userSchema ={
    name:String,
    password:String
}
// NOw you need to give this schme to mongodb

const User = new mongo.model('User',userSchema)

app.post('/newUser',(req,res)=>{
    const username = req.body.name
    const password = req.body.password

    //Need to create an object from user 
    const UserDetails= new User({
        name:username,
        password:password
    })

    //Now save the user details 
    UserDetails.save(function(err){
        if(err){
            res.send("PLEASE TRY AGAIN LATER")
            console.log(err)
        }
        else{
            res.send("Suceesfully Authenticated")
        }
    })
})
//CONNECTING THE DATABASE 


//Lets find the user in the database 
//Let the user make an post request on the /login

app.post('/login',(req,res)=>{

//model.findOne
   User.findOne({
    name:req.body.name},function(err,foundUser){
        if(err){
            res.send("Error occured!")
            console.log(err)
        }
        // Have found the user
        else{
            if(foundUser){
                if(foundUser.password==req.body.password){
                    res.send(`Welcome back ${foundUser.name}${foundUser.id}`)
                }
            }
        }
    }
   )

})
mongo.connect(`${process.env.CLOUD_ID}`)



app.listen(3000,function(){
    console.log("Server is live ")
})