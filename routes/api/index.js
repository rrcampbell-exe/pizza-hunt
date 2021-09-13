const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-routes');

// add prefix of `/pizzas` and `/comments` to routes created in `pizza-routes.js` and `comment-routes.js`, respectively
router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);

module.exports = router;