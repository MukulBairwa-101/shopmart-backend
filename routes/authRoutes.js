const express = require('express');
const authRouter = express.Router();

const {signin,signup,signout} = require('../controllers/auth');


authRouter.post("/signin",signin);
authRouter.post("/signup",signup);
authRouter.post("/signout",signout);

module.exports = authRouter;