const express = require('express')
const router = express.Router()
const contactSchema = require('../modal/contact')
router.get('/', async(req,res)=>{
    try{
        const contact_doc = await contactSchema.find()
        res.json(contact_doc)
        // res.send('get from contact')

    }catch(err){
        res.send('error',err)
    }
})

router.post("/", async (req, res) => {
    try {
      console.log("body", req.body);
      const contact = new contactSchema(req.body);
      const contact_doc = await contact.save();
      console.log("contact_doc", contact_doc);
      res.json(contact_doc);
    } catch (err) {
      res.send(err);
    }
});

router.delete('/:id',async (req,res)=>{
    try{
        const contactDelete = await contactSchema.findById(req.params.id)
        const contact_doc = await contactDelete.delete()
        res.send(contact_doc)
    }catch(err){
        res.send(err)
    }

})

module.exports = router