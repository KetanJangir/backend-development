const asyncHandler = (handlingRequest) =>{
    (req,res,next)=>{
        Promise.resolve(handlingRequest(req,res,next))
        .catch((error)=>next(error));
    }
};


// const asyncHandler = (handlingRequest) = async(req,res,next) =>{
//     try{
//         await handlingRequest(req,res,next);
//     }catch{
//         res.status(err.code || 500 ).json({
//             success:false,
//             message:err.message
//         });
//     }
// }

export default asyncHandler;