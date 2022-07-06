const express = require('express')
const mongo = require('mongoose')
const bcrypt = require('bcrypt')
const env = require('dotenv').config()
const { hash } = require('bcrypt')
const bodyParser = require('body-parser')

const app=express()

app.use(bodyParser.urlencoded({extended:true}))

const userSchema ={
    name:String,
    password:String
}

const UserModle= new mongo.model('UserModle',userSchema)

mongo.connect(process.env.CLOUD_ID)

app.post('/addUser',(req,res)=>{

    bcrypt.hash(req.body.password,10,function(err,hash){  // Will produce has for req.body.password

        // creating a new user
        const newUser = new UserModle({
            name:req.body.name,
            password:hash
        })
        
        newUser.save(function(err){
            if(err){
                res.send("Something went wrong pls try again later")
            }
            else{
                res.send("User saved successfully")
            }
        })

    })
    

})

app.post('/login',(req,res)=>{

    //Need to find the user First 
    UserModle.findOne({name:req.body.name},function(err,FoundUser){
        if(err){
            res.send("An Unwanted error occured")
        }
        else{
            if(FoundUser){
                bcrypt.compare(req.body.password,FoundUser.password,function(err,result){
                    if(err){
                        res.send('User Found but error ocurred')
                    }
                    else{
                       if(result){
                        res.send(`welcome back ${FoundUser.name}`)
                       }
                       else{
                        res.send("Entred wrong password")
                       }
                    }
                })
            }
        }
    })

})




app.listen(3000,function(){
    console.log("Server is running at port 3000")
})