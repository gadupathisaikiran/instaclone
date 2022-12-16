const express = require('express')//
const mongoose = require('mongoose');//
const multer  = require('multer')
const cors = require('cors')

const bodyparser = require("body-parser");//
const Blog = require('../models/blog');
const Image = require('../models/image')


const router = express.Router();
router.use(bodyparser.json())
router.use(cors());

//connect to mongodb atlas
async function main() {  
    await mongoose.connect('mongodb://127.0.0.1/blog-api');
    console.log('Connected successfully to server');
}

main()

//storage 
router.use(express.static("public"));

// to upload a file
const Imagestorage = multer.diskStorage({
    destination: 'uploads',
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

// upload middleware 
const upload = multer({ storage: Imagestorage }).single('testImage')


router.get("/get", async (req, res) => {
    try {
        const data = await Blog.find({});
        res.status(200).send(data)
    }
    catch {
        res.status(400).send("an error occured while getting posts")
    }
}) 
//************************************* */ 

router.post("/post",   async (req,res)=>{
    try {
       
        upload(req,res,(err)=>{
            
            if(err){
                console.log(err)
            }else{
                
                const newImage = new Image({
                    name: req.body.data.name,
                    location: req.body.data.location,
                    description: req.body.data.description,
                    Date: Date.now(),
                    like :parseInt (Math.random()*100),
                    imagedata: {
                        data: req.body.data.image,
                        contentType: 'image/png'
                    }
                   
                })
                
                newImage.save()
                .then(()=>res.send(newImage))
                .catch((e)=>console.log(e))
            }
        })
    } catch (e) {
        console.log("error hoccge")
        res.json({
            status:"failed",
            messege: e.messege
        })
    }
})

module.exports = router;