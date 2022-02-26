const router = require('express').Router();
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require('../../../controllers/userController');

router.route('/')
    .post(createUser)
    .get(getAllUsers);
    
router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

module.exports = router;