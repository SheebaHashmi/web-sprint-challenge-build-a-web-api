const Projects = require('./projects-model')

// add middlewares here related to projects
async function validateProject(req,res,next){
    const validProject = await Projects.get(req.params.id)
    
    if(validProject){
        req.project = validProject
        next()
    }   
    else{
        next({status:404,message:'no project found'})
    }
}

function validateProjectBody(req,res,next){
    const {name,description,completed} = req.body

    if(!name || !description || completed === undefined){
        console.log("validating project body");
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
