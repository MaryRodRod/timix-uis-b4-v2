const express = require('express');
const router = express.Router();

const Albumscontroller = require('../controllers/albums');

router.get('/', Albumscontroller.getAlbums);
router.get('/:id', Albumscontroller.getAlbum);
router.post('/', Albumscontroller.postAlbum);
router.delete('/:id', Albumscontroller.delAlbum);
router.put('/:id', Albumscontroller.updateAlbum);

module.exports = router;