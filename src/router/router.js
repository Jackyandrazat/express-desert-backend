const express = require('express');
const desertController = require('../controller/desertControler');
const cofeeController = require('../controller/cofeeController');

const router = express.Router();

//READ --> GET
router.post('/', desertController.createNewDesert);
router.get('/', desertController.getAllDeserts);
router.put('/:id', desertController.updateDesert);
router.get('/allMenu', desertController.getAllMenu);
router.get('/cofee/:id', cofeeController.getCofee);
router.get('/cofee', cofeeController.getAllCofee);
// router.get('/cofee/ice', cofeeController.getIceCofee);
// router.delete('/:id', desertController.);




module.exports = router; 