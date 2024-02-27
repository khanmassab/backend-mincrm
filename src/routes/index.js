import authRoute from './auth.route.js'; 
import userRoute from './user.route.js'
import express from 'express';

const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/users',
        route: userRoute
    }
    
];

defaultRoutes.forEach((route) => router.use(route.path, route.route));

router
    .get('/', (req, res) => {
        res.send('Hello World')
    });

export default router;


// const router = Router();

// module.export(router);