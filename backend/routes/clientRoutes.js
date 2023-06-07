const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/list', clientController.list);
router.post('/new', clientController.new);
router.put('/edit/:id', clientController.edit);
router.delete('/delete/:id', clientController.delete);

module.exports = router;