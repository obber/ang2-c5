import Sequelize from 'sequelize';
import { sequelize } from '../db';

const Match = sequelize.define('Matches',
  {
    user1_id: {
      type     : Sequelize.INTEGER,
      allowNull: false,
    },
    user2_id: {
      type     : Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      // 0 = user1_id won
      // 1 = user2_id won
      type     : Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    instanceMethods: {
      getWinner: () => {
        if (this.status) {
          return this.user2_id;
        }
        return this.user1_id;
      },
    },
  },
);

export default Match;
