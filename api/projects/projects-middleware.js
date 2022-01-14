const Projects = require('./projects-model')

// add middlewares here related to projects
async function validateProject(req,res,next){
    const validProject = await Projects.get(req.params.id)
    
    if(validProject){
        req.project = validProject
        next()
    }   
    else{
        // res.status(404).json({message:'no project found'})
        next({status:404,message:'no project found'})
    }
}

function validateProjectBody(req,res,next){
    // if(!req.body){
    //     next({status:400,message:'No new project to add'})
    // }
    // else{
    //     next()
    // }
    const {name,description,completed} = req.body
    if(!name || !description || completed === undefined){
        next({status:400})
    }
    else{
        next()
    }
}

module.exports = {
 validateProject,
 validateProjectBody,
}
