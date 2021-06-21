var dbConn  = require('../../config/db.config');

var Visite = function(viste){
    this.nom     =   Visite.nom;
    this.date      =   Visite.date;
    this.image          =   Visite.image;
    this.id_user          =   Visite.id_user;
    this.longtitude_user          =   Visite.longtitude_user;
    this.latitude_user          =   Visite.latitude_user;
}

Visite.getVisite = (result) =>{
    dbConn.query('SELECT * FROM visite', (err, res)=>{
        if(err){
            console.log('Error while fetching visite', err);
            result(null,err);
        }else{
            console.log('visite fetched successfully');
            result(null,res);
        }
    })
}

Visite.createVisite = (visiteReqData, result) =>{
    dbConn.query('INSERT INTO visite SET ? ', visiteReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('visite created successfully');
            result(null, res)
        }
    })
}

module.exports = Visite;