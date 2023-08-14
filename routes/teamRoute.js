import express from 'express';
import teamController from '../controllers/teamController.js';

const teamRouter = express.Router();

teamRouter.get('/', teamController.getTeam);
teamRouter.get('/:id', teamController.getTeamById);
teamRouter.post('/', teamController.addTeam);
teamRouter.put('/:id', teamController.updateTeam);
teamRouter.delete('/:id', teamController.deleteTeam);

export default teamRouter;
