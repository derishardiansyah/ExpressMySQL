import { DataTypes } from 'sequelize';

const premierLeagueModels = (sequelize) =>
  sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kota: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tahun_berdiri: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stadion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

export default premierLeagueModels;
