// To make user to use Functions of users.js controllers file
const controller = require('../controllers/users');
const router = require('express').Router();  // To connect router

// CRUD Routes /users
router.get('/', controller.getUsers); // /users
router.get('/:userId', controller.getUser); // /users/:userId
router.post('/', controller.createUser); // /Create users 
router.put('/:userId', controller.updateUser); // / UPdate users/:userId
router.delete('/:userId', controller.deleteUser); // / Delete users/:userId

module.exports = router;
