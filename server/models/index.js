import User from './user.model';
import Match from './match.model';

// Schema relationships
User.hasOne(Match, { foreignKey: 'user1_id' });
User.hasOne(Match, { foreignKey: 'user2_id' });

export {
  User,
  Match,
};
