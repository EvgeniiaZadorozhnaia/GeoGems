const router = require("express").Router();
const { UsersStone, Stone, User } = require("../../db/models");
const { verifyAccessToken } = require("../middlewares/verifyToken");
const { checkFavorites } = require("../middlewares/checkFavorites");

router
  .post("/", verifyAccessToken, checkFavorites, async (req, res) => {
    const { userId, stoneId } = req.body;
    try {
      const entry = await UsersStone.create({ userId, stoneId });
      res.json(entry);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .delete("/", verifyAccessToken, async (req, res) => {
    const { userId, stoneId } = req.body;
    try {
      await UsersStone.destroy({ where: { userId, stoneId } });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const stones = await Stone.findAll({
        include: { model: User, where: { id }, required: true },
      });
      const data = stones.map((el) => el.get({ plain: true }));
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  });

module.exports = router;
