const router = require('express').Router();
const stonesRouter = require('./stones.api.router');
const authRouter = require('./auth.api.router');
const tokensRouter = require('./tokens.api.router');
const favoriteRouter = require('./favorite.api.router');

router.use('/tokens', tokensRouter);
router.use('/auth', authRouter);
router.use('/stones', stonesRouter);
router.use('/favorites', favoriteRouter);

module.exports = router;
