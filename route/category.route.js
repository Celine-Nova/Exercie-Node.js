const express = require('express');
const router = express.Router();

const category_controller = require('../controller/category.controller');

router.get('/', category_controller.list_category);
router.get('/yules/:id', category_controller.list_yule_by_category);
router.post('/add', category_controller.add_category);
router.get('/:id', category_controller.detail_category);
router.put('/:id', category_controller.edit_category);
router.delete('/:id', category_controller.delete_category);

module.exports = router;