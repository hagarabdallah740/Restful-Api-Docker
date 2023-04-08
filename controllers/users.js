// Define functions 
//*-----------------------------------*
// Import user to define it here !
const User = require('../models/user');

// CRUD Controllers

//get all users 
// req ------> send request 
// res ------> get response 
exports.getUsers = (req, res, next) => {
    // tThis function === Select from user
    User.findAll()
        .then(users => {
            res.status(200).json({ users: users });
        })
        .catch(err => console.log(err));
}
//<----------------------------------------------------->

//get user by id ------> Paramters
exports.getUser = (req, res, next) => {
    const userId = req.params.userId;
    // Check if valid user with true Pk or Not !
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json({ user: user });
        })
        .catch(err => console.log(err));
}
//<---------------------------------------------->

//To create new user must be sent request 
exports.createUser = (req, res, next) => {
    // Paramters of user in user.js file
  const name = req.body.name;
  const email = req.body.email;
  User.create({
    name: name,
    email: email
  })
  //True user
    .then(result => {
      console.log('Created User');
      //201-----> Resource created successfuly
      res.status(201).json({
        message: 'User created successfully!',
        user: result
      });
    })
    // False User 
    .catch(err => {
      console.log(err);
    }); 
}
//<----------------------------------------------------->

//update user
// I need userId & new obeject body must be update 
exports.updateUser = (req, res, next) => {
  const userId = req.params.userId;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  User.findByPk(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
      // True User
      user.name = updatedName;
      user.email = updatedEmail;
      return user.save();
    })
    .then(result => {
        // True Process 
      res.status(200).json({message: 'User updated!', user: result});
    })
    .catch(err => console.log(err));
}
//<---------------------------------------------------->

//delete user
exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
      //True User destroy from database !
      return User.destroy({
        where: {
          id: userId
        }
      });
    })
    .then(result => {
        //True process 
      res.status(200).json({ message: 'User deleted!' });
    })
    .catch(err => console.log(err));
}