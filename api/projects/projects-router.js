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
    const project = await Projects.get(req.params.id)
    if(project){
        res.json(project)
    }
    else{
        res.status(404).json({message:"Project not found"})
    }
})
router.post('/',(req,res)=> {

})
// router.post('/:id',(req,res)=> {

// })
// router.put('/:id',(req,res)=> {

// })
// router.delete('/:id',(req,res)=> {

// })
// router.get('/:id/actions',(req,res)=> {

// })

module.exports = router