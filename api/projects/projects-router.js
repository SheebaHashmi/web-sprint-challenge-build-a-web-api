// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')
const { validateProject,validateProjectBody }= require('./projects-middleware')
const router = express.Router()

router.get('/',(req,res)=> {
  Projects.get()
  .then(project => {
      res.json(project)
    })
  .catch(() => res.json([]))
})

router.get('/:id',validateProject,(req,res)=> {
    res.json(req.project)
})

router.post('/',validateProjectBody,async(req,res)=> {
   try{ 
        const newProject = await Projects.insert(req.body)
        res.json(newProject)
   } 
   catch(err){
       res.status(400).json({message:err.message})
   }  
})

router.put('/:id',validateProject,validateProjectBody,async(req,res)=> {
    const {id} = req.params
    const {name,description,completed} = req.body
    try{  
        const updateProject = await Projects.update(id,{name,description,completed})
        res.json(updateProject)
    }
    catch(err){
        res.json(err.message)
    }
    
})
router.delete('/:id',validateProject,async(req,res)=> {
    const {id} = req.params
    try{
        await Projects.remove(id)
        res.json(req.project)
    }
    catch(err){
        res.json(err)
    }
})
router.get('/:id/actions',async(req,res)=> {
    const { id } = req.params

    try{
        const actions = await Projects.getProjectActions(id)
        res.json(actions)
    }
    catch(err){
        res.json(err)
    }
    
})


module.exports = router