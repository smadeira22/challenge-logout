const express = require('express');
const cors = require('cors');

//const logRoutescc = require('morgan')

/*const logRoutes = require('./middleware/logger');*/
const logRoutes = require('morgan');
const postRouter = require('./routers/post');
const userRouter = require('./routers/user');
const tokenRouter = require('./routers/token');

const api = express();

api.use(cors());
api.use(express.json());
api.use(logRoutes('dev'));

api.get("/", (req, res) => {
    res.json({
        name: "Discretion",
        description: "Send and receive private messages.",
        endpoints: [
            "GET /posts",
            "GET /posts/:id",
            "POST /posts",
            "DELETE /posts/:id",
            "POST /users/login",
            "POST /users/register"
        ]
    })
})

api.use("/posts", postRouter);
api.use("/users", userRouter);
api.use("/token", tokenRouter);

module.exports = api;