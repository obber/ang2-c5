import { User } from '../models';

const userController = {};

userController.get = (req, res) => {
  console.log('woah');
  res.json({
    message: 'woah',
  });
};

userController.post = async (req, res) => {
  const { firstname, lastname, username, email } = req.body;
  try {
    const user = await User.create({
      firstname,
      lastname,
      username,
      email,
    });
    res.json({
      success: true,
      id     : user.id,
    });
  } catch (e) {
    res.json({
      success: false,
      error  : e.toString(),
    });
  }
};

export default userController;
