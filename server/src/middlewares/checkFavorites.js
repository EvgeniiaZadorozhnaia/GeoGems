const { UsersStone } = require("../../db/models");

async function checkFavorites(req, res, next) {
  try {
    const { userId, stoneId } = req.body;
    const existingEntry = await UsersStone.findOne({
      where: { userId, stoneId },
    });

    if (!existingEntry) {
      return next();
    }
  } catch (error) {
    console.log("Камень уже добавлен в избранное");
    return res.status(400).json({ error: "Камень уже добавлен в избранное" });
  }
}

module.exports = { checkFavorites };
