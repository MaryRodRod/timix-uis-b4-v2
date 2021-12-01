const express = require('express');
const router = express.Router();

const Songscontroller = require('../controllers/songs');

router.get('/', Songscontroller.getsongs);
router.post('/', Songscontroller.postsongs);
router.delete('/:id', Songscontroller.delSong);

module.exports = router;