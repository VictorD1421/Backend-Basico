const {Router} = require('express');
const { putUser, getUsers, postUser, deleteUser } = require('../controllers/user');

const router = Router();


router.get('/', getUsers);

router.put('/:id', putUser);
  
router.post('/', postUser);
  
router.delete('/', deleteUser);


module.exports = router