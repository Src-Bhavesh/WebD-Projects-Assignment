const express = require("express");
const router = express.Router();

const mobileController = require('../contollers/controllers')



router.get('/',mobileController.home);
router.get('/insert',mobileController.insert);
router.post('/create',mobileController.create);
router.get('/display',mobileController.display);
router.get('/delete/:id',mobileController.delete);
router.get('/edit/:id',mobileController.edit);
router.post('/update/:id',mobileController.update);
router.post('/search',mobileController.search);



module.exports = router;