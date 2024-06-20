const router = require("express").Router();
const { Stone } = require("../../db/models");
const { checkStones } = require("../middlewares/checkStones");
const { verifyAccessToken } = require("../middlewares/verifyToken");

router
  .get("/", async (req, res) => {
    try {
      const stones = await Stone.findAll();
      res.json(stones);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .post("/", verifyAccessToken, checkStones, async (req, res) => {
    const { title, price, description, url } = req.body;
    try {
      const entry = await Stone.create({ title, price, description, url });
      res.json(entry);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const stone = await Stone.findOne({ where: { id } });
      res.json(stone);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  })

  .delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await Stone.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  })

  .put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, price, url, description } = req.body;
    try {
      const stone = await Stone.findByPk(id);
      if (!stone) {
        return res.status(404).json({ error: "Камень не найден" });
      }
      await stone.update({ title, price, url, description })
      await stone.save();
      res.json(stone);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  });

  router

module.exports = router;
