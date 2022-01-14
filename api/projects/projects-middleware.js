const Projects = require('./projects-model')

// add middlewares here related to projects
// async function validateProject(req,res,next){
//     const validProject = await Projects.get(req.params.id)
//     try{
//         if(validProject){
//             req.project = validProject
//             next()
//         }
//         else{
//             next({status:404,message:'project not found'})
//         }
//     }
//     catch(err){
//         next(err)
//     }
// }

// function validateProjectBody(req,res,next){
//     if(!req.body){
//         next({status:400,message:'No new project to add'})
//     }
//     else{
//         next()
//     }
// }

module.exports = {
 
}
