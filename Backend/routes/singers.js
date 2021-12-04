const express = require('express');
const router = express.Router();

const Singerscontroller = require('../controllers/singers');

router.get('/', Singerscontroller.getSingers);
router.get('/:id', Singerscontroller.getSinger);
router.post('/', Singerscontroller.postSinger);
router.delete('/:id', Singerscontroller.delSinger);
router.put('/:id', Singerscontroller.updateSinger);

module.exports = router;