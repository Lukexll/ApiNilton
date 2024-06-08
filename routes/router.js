const router = require("express").Router();

// Services routers
const servicesRouter = require("./service");

router.use("/", servicesRouter);

module.exports = router;