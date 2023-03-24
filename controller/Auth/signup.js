const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/User.model');

const signup= async (req, res) => {
    try {
      const { name, email, phone, gender, password } = req.body;
  
      // Check if the email is already in use
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email is already in use' });
      }
  
      // Hash the password before saving to the database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = new User({
        name,
        email,
        phone,
        gender,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await user.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  module.exports=signup