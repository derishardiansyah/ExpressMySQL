import { Sequelize } from 'sequelize';
import dbConfig from '../config/dbConfig.js';
import premierLeagueModels from '../models/premierLeagueModels.js';

const db = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, dbConfig.options);

export const premierleague = premierLeagueModels(db);

export default db;
