const express = require('express');
const router = express.Router();

const Songscontroller = require('../controllers/songs');

router.get('/', Songscontroller.getSongs);
router.get('/:id', Songscontroller.getSong);
router.post('/', Songscontroller.postSong);
router.delete('/:id', Songscontroller.delSong);
router.put('/:id', Songscontroller.updateSong);

module.exports = router;