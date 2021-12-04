const express = require('express');
const router = express.Router();

const Generationscontroller = require('../controllers/generations');

router.get('/', Generationscontroller.getGenerations);
router.get('/:id', Generationscontroller.getGeneration);
router.post('/', Generationscontroller.postGeneration);
router.delete('/:id', Generationscontroller.delGeneration);
router.put('/:id', Generationscontroller.updateGeneration);

module.exports = router;