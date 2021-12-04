const express = require('express');
const router = express.Router();

const Userlistscontroller = require('../controllers/userlists');

router.get('/', Userlistscontroller.getUserlists);
router.get('/:id', Userlistscontroller.getUserlist);
router.post('/', Userlistscontroller.postUserlist);
router.delete('/:id', Userlistscontroller.delUserlist);
router.put('/:id', Userlistscontroller.updateUserlist);

module.exports = router;