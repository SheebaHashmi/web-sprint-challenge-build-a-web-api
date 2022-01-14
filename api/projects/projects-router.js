// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')

const router = express.Router()

router.get('/',(req,res)=> {
  Projects.get()
  .then(project => {
      res.json(project)
    })
  .catch(() => res.json([]))
})

router.get('/:id',async(req,res)=> {
    const validProject = await Projects.get(req.params.id)
    
        if(validProject){
            res.json(validProject)
        }   
    else{
        res.status(404).json({message:'no project found'})
    }
})

router.post('/',async(req,res)=> {
   try{ 
       if(req.body){
            const newProject = await Projects.insert(req.body)
            return res.json(newProject)
        }
   } 
   catch(err){
       res.status(400).json({message:err.message})
   }  
})

router.put('/:id',async(req,res)=> {
    const {id} = req.params
    const {name,description,completed} = req.body
    try{
        const valid = await Projects.get(id)
        if(!valid){
            res.status(404).json({message:'project not found'})
        }
        else if(!name || !description || completed === undefined){
            res.status(400)
        }
        const updateProject = await Projects.update(id,{name,description,completed})
        res.json(updateProject)
    }
    catch(err){
        res.json(err.message)
    }
    
})
router.delete('/:id',async(req,res)=> {
    const {id} = req.params
    try{
        const valid = await Projects.get(id)
        if(!valid){
            res.status(404).json([])
        }
        else{
            await Projects.remove(id)
            res.json(valid)
        }
    }
    catch(err){
        res.json(err)
    }
})
// router.get('/:id/actions',(req,res)=> {

// })

module.exports = router