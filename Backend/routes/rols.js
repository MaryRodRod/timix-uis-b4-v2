const express = require('express');
const router = express.Router();

const Rolscontroller = require('../controllers/rols');

router.get('/', Rolscontroller.getRols);
router.get('/:id', Rolscontroller.getRol);
router.post('/', Rolscontroller.postRol);
router.delete('/:id', Rolscontroller.delRol);
router.put('/:id', Rolscontroller.updateRol);

module.exports = router;