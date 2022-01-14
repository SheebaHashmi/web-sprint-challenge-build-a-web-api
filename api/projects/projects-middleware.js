const Projects = require('./projects-model')

// add middlewares here related to projects
async function validateProject(req,res,next){
    const validProject = await Projects.get(req.params.id)
    try{
        if(!validProject){
            next({status:404,message:'no project found'})
        }
         req.project = validProject
         next()
        
    }
    catch(err){
        next(err)
    }
}

// function validateProjectBody(req,res,next){
//     if(!req.body){
//         next({status:400,message:'No new project to add'})
//     }
//     else{
//         next()
//     }
// }

module.exports = {
 validateProject
}
