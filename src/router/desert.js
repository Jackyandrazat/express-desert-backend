const express = require('express');
const desertController = require('../controller/desertControler');

// // const auth = require('../middleware/authMiddleware.js');
// const authenticateToken = require('../middleware/authMiddleware');


const router = express.Router();

//READ --> GET
router.post('/', desertController.createNewDesert);
router.get('/', desertController.getAllDeserts);
router.put('/:id', desertController.updateDesert);
router.delete('/:id', desertController.);




module.exports = router; 