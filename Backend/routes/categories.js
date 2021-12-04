const express = require('express');
const router = express.Router();

const Categoriescontroller = require('../controllers/categories');

router.get('/', Categoriescontroller.getCategories);
router.get('/:id', Categoriescontroller.getCategory);
router.post('/', Categoriescontroller.postCategory);
router.delete('/:id', Categoriescontroller.delCategory);
router.put('/:id', Categoriescontroller.updateCategory);

module.exports = router;