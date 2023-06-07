const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.get('/list', addressController.list);
router.post('/new', addressController.new);
router.put('/edit/:id', addressController.edit);
router.delete('/delete/:id', addressController.delete);

module.exports = router;