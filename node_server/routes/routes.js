const express = require('express');
// const authRoute = require('./auth_route.js');
// const userRoute = require('./user_route.js');
// const conversationRoute = require('./conversation_route');
const router = express.Router();

const routes = [
    // {
    //     path: '/auth',
    //     route: authRoute,
    // },
    // {
    //     path: '/user',
    //     route: userRoute,
    // },
    // {
    //     path: '/conversation',
    //     route: conversationRoute,
    // }
];

routes.forEach(
    (route) => {
        router.use(route.path, route.route);
    }
);

module.exports = router;