const express = require('express');
const router = express.Router();

const Playlistscontroller = require('../controllers/playlists');

router.get('/', Playlistscontroller.getPlaylists);
router.get('/:id', Playlistscontroller.getPlaylist);
router.post('/', Playlistscontroller.postPlaylist);
router.delete('/:id', Playlistscontroller.delPlaylist);
router.put('/:id', Playlistscontroller.updatePlaylist);

module.exports = router;