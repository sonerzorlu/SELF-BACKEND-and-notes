"use strict";


const middlewareFunction1 = (req,res,next) =>{

    const skip = req.query.skip ?? false


    req.customData = 'Custom Data'
    res.customDataInResponse = 'Custom Data In Response'

    if(skip){
        next('route')
    }else{
        next()
    }
    
}
//
const middlewareFunction2 = (req,res,next) =>{

    // next()

    res.send({
        customData: [
            req.customData,
            res.customDataInResponse
        ],
        message: 'this is func2. first next() running'
})}

module.exports=[middlewareFunction1,middlewareFunction2]