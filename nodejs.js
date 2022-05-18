const express=require("express")
const ejs=require("ejs")
const fs=require("fs")
const expressLayouts= require('express-ejs-layouts')
const {static} = require("express");

let users=[]
let k=0
const server=express()

const data=fs.readFileSync("./data","utf-8")

server.set('view engine', 'ejs')

server.use(express.static('./the_site'))
server.use(express.urlencoded({extended: false}))
server.use(expressLayouts)





server.post("/profile.html",(req,res)=>{
    if(req.body.method==="0"){
        if(req.body.religion.match(/[0-9]*/)) {

            users.push({
                "name": req.body.name,
                "password": req.body.password,
                "email": req.body.email,
                "religion": req.body.religion
            })

            let replaced = String(data).replace("req.body.name", req.body.name)
            replaced = replaced.replace("req.body.email", req.body.email)
            replaced = replaced.replace("req.body.religion", req.body.religion)
            fs.writeFileSync(__dirname + "/the_site/profile.html", replaced)


            res.status(200).send(replaced)
            res.end()
        }
        else{
            res.status(200).send(fs.readFileSync(__dirname+"/the_site/signUp.html","utf-8"))
            res.end()

        }
    }
    if(req.body.method==="1") {
        users.forEach(element => {
            if (element["name"] === req.body.name && element["password"] === req.body.password && element["email"] === req.body.email) {
                let   replaced=String(data).replace("req.body.name",req.body.name)
                replaced=replaced.replace("req.body.email",req.body.email)
                replaced=replaced.replace("req.body.religion",req.body.religion)
                fs.writeFileSync(__dirname+"/the_site/profile.html",replaced)


                res.status(200).send(replaced)
                res.end()
            }
            else{
                res.status(200).send(fs.readFileSync(__dirname+"/the_site/login.html","utf-8"))
                res.end()

            }

        })
    }

})


server.all("*",(req,res)=>{
    res.status(404).send(fs.readFileSync(__dirname+"/the_site/error.html","utf-8"))

})

server.listen(5000,(req,res)=>{

})