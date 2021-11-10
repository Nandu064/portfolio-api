const express = require('express')
const router = express.Router()
const educationSchema = require('../modal/education')
router.get('/', async (req,res)=>{
    try{
        const education_doc = await educationSchema.find()
        console.log(education_doc)
        res.json(education_doc)
        // res.send('get from education')

    }catch(err){
        res.send('error',err)
    }
})

router.post("/", async (req, res) => {
    try {
      console.log("body", req.body);
      const education = new educationSchema(req.body);
      const education_doc = await education.save();
      console.log("education_doc", education_doc);
      res.json(education_doc);
    } catch (err) {
      res.send(err);
    }
});

router.delete('/:id',async (req,res)=>{
    try{
        const educationDelete = await educationSchema.findById(req.params.id)
        const education_doc = await educationDelete.delete()
        res.send(education_doc)
    }catch(err){
        res.send(err)
    }

})

module.exports = router