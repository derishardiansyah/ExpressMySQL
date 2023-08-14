import { premierleague } from '../database/db.js';

const teamController = {
  addTeam: async (req, res) => {
    try {
      if (req.body.name && req.body.kota && req.body.tahun_berdiri && req.body.stadion) {
        const newTeam = await premierleague.create(req.body);
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success add team',
          data: newTeam,
        });
      } else {
        res.status(400).json({
          status: 'error',
          statusCode: 400,
          message: 'Name, kota, tahun_berdiri and stadion are required',
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  getTeam: async (req, res) => {
    try {
      const teams = await premierleague.findAll();
      res.json({
        status: 'success',
        statusCode: 200,
        message: 'Success get all teams',
        data: teams,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  getTeamById: async (req, res) => {
    try {
      const findTeam = await premierleague.findByPk(req.params.id);
      if (findTeam) {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success get team by id',
          data: findTeam,
        });
      } else {
        res.json({
          status: 'Error',
          statusCode: 400,
          message: 'team not found',
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: 'error test',
        statusCode: 500,
        message: err,
      });
    }
  },
  updateTeam: async (req, res) => {
    try {
      const updateTeam = await premierleague.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (updateTeam[0] === 0) {
        res.json({
          status: 'error',
          statusCode: 400,
          message: 'Team not found',
        });
      } else {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success update team',
          data: req.body,
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
  deleteTeam: async (req, res) => {
    try {
      const deleteTeam = await premierleague.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deleteTeam === 0) {
        res.json({
          status: 'error',
          statusCode: 400,
          message: 'Team not found',
        });
      } else {
        res.json({
          status: 'success',
          statusCode: 200,
          message: 'Success delete team',
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 'error',
        statusCode: 500,
        message: err,
      });
    }
  },
};

export default teamController;
