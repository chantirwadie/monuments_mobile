const express = require('express');
const router = express.Router();

const visiteController = require('../controllers/visite.controllers');

// get all employees

router.get('/visites',visiteController.getVisiteListe);


router.post('/add', visiteController.createNewVisite);



module.exports = router;