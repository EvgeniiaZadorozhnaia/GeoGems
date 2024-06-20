const router = require('express').Router();
const { Stone } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyToken');

router
  .get('/', async (req, res) => {
    try {
      const stones = await Stone.findAll();
      res.json(stones);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const stone = await Stone.findOne({ where: { id } })
      res.json(stone)
    } catch (error) {
      console.log(error)
      res.status(500).send(error.message)
    }
  })

module.exports = router;
