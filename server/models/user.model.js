import Sequelize from 'sequelize';
import { sequelize } from '../db';

const User = sequelize.define('Users',
  {
    firstname: {
      type     : Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type     : Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type     : Sequelize.STRING,
      allowNull: false,
      unique   : true,
      validate : {
        isUnique: async (username, next) => {
          try {
            const id = await User.find({
              where     : { username },
              attributes: ['id'],
            });
            if (id) {
              next('username already taken!');
            }
          } catch (e) {
            return next(e.toString());
          }
          return next();
        },
      },
    },
    email: {
      type     : Sequelize.STRING,
      allowNull: false,
      validate : { isEmail: true },
    },
    wins  : Sequelize.INTEGER,
    losses: Sequelize.INTEGER,
  }
);

export default User;
