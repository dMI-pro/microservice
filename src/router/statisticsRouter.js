const Router = require('express');

const statisticsRouter = new Router();

statisticsRouter.post('/statistics/range');
statisticsRouter.post('/statistics/daily');

export default statisticsRouter


