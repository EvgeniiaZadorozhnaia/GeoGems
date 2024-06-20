const { Stone } = require("../../db/models");

async function checkStones(req, res, next) {
  try {
    const { title, price, description, url } = req.body;
    const existingEntry = await Stone.findOne({
      where: { title, price, description, url },
    });

    if (!existingEntry) {
      return next();
    }
  } catch (error) {
    console.log("Такой камень уже есть в базе данных");
    return res.status(400).json({ error: "Камень уже добавлен в избранное" });
  }
}

module.exports = { checkStones };
