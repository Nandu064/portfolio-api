const express = require('express')
const router = express.Router()
const projectSchema = require('../modal/projects')

// Get all projects

router.get('/', async(req,res)=>{
    try{
        const project_doc = await projectSchema.find()
        res.json(project_doc)
        // res.send('get from project')

    }catch(err){
        res.send('error',err)
    }
})

// get Single project

router.get('/:id', async(req,res)=>{
    try{
        const{ id } = req.params
        console.log(req.params)
        const project_doc = await projectSchema.findById(id)
        console.log(project_doc)
        project_doc?
        res.json(project_doc)
        :res.json({"error":`No project with the id ${id}`})

    }catch(err){
        res.send('error',err)
    }
})

// post Projects

router.post("/", async (req, res) => {
    try {
      const project = new projectSchema(req.body);
      const project_doc = await project.save();
      res.json(project_doc);
    } catch (err) {
      res.send(err);
    }
});

// update project
            
router.patch('/:id',async (req,res)=>{
    try{
        const project = await projectSchema.findById(req.params.id)
        project.title = req.body.title;
        project.description = req.body.description;
        project.git_hub = req.body.git_hub;
        project.start_date = req.body.start_date;
        project.end_date = req.body.end_date;
        project.demo_url = req.body.demo_url;
        const updated_doc = await project.save()
        res.json(updated_doc)
    }
    catch (err){
        res.send(err)
    }
})


// delete project

router.delete('/:id',async (req,res)=>{
    try{
        const projectDelete = await projectSchema.findById(req.params.id)
        const project_doc = await projectDelete.delete()
        res.send(project_doc)
    }catch(err){
        res.send(err)
    }

})

module.exports = router