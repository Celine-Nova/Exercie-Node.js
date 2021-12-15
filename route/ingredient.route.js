const express = require('express');
const router = express.Router();

const ingredient_controller = require('../controller/ingredient.controller');

router.get('/', ingredient_controller.list_ingredient);
router.post('/add', ingredient_controller.add_ingredient);
router.get('/:id', ingredient_controller.detail_ingredient);
router.put('/:id', ingredient_controller.edit_ingredient);
router.delete('/:id', ingredient_controller.delete_ingredient);

module.exports = router;