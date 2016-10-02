import Sequelize from 'sequelize';
import cfg from './config';

const sequelize = new Sequelize(cfg.database, cfg.username, cfg.password, {
  dialect: 'sqlite',
  storage: 'server/db/database.sqlite',
});

export {
  sequelize,
};
