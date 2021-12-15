const express = require('express');
const router = express.Router();

const yule_controller = require('../controller/yule.controller');

router.get('/', yule_controller.list_yule);
router.post('/add', yule_controller.add_yule);
router.get('/:id', yule_controller.detail_yule);
router.get('/search/:search', yule_controller.search_yule);
router.put('/:id', yule_controller.edit_yule);
router.delete('/:id', yule_controller.delete_yule);

module.exports = router;