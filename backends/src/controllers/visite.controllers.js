
const VisiteModel = require('../models/visite.model');


// get all employee list
exports.getVisiteListe = (req, res)=> {
    VisiteModel.getVisite((err, visites) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Visite', visites);
        res.send(visites)
    })
}


exports.createNewVisite = (req, res) =>{
    const visiteReqData = new VisiteModel(req.body);
    console.log('visiteReqData', visiteReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        VisiteModel.createVisite(req.body, (err, visite)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Created Successfully', data: visite.insertId})
        })
    }
}

            

