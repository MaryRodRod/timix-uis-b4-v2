const express = require('express');
const router = express.Router();

const Userscontroller = require('../controllers/users');

router.get('/', Userscontroller.getUsers);
router.get('/:id', Userscontroller.getUser);
router.post('/', Userscontroller.postUser);
router.delete('/:id', Userscontroller.delUser);
router.put('/:id', Userscontroller.updateUser);

module.exports = router;