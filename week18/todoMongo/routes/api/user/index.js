const router = require('express').Router();
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById, addHobbyToUserById } = require('../../../controllers/userController');

router.route('/')
    .post(createUser)
    .get(getAllUsers);
    
router.put('/addHobby/:userId', addHobbyToUserById);

router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

module.exports = router;