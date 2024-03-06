const express = require('express');
const desertController = require('../controller/desertControler');

// // const auth = require('../middleware/authMiddleware.js');
// const authenticateToken = require('../middleware/authMiddleware');


const router = express.Router();

//READ --> GET
router.post('/', desertController.createNewDeserts)
;
router.get('/', desertController.getAllDeserts);




module.exports = router; 