import authRoute from './auth.route.js'; 
import userRoute from './user.route.js'
import express from 'express';
import passport from 'passport';

const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
        auth: undefined
    },
    {
        path: '/users',
        route: userRoute,
        auth: passport.authenticate('local', { session: false })
    }
    
];

defaultRoutes.forEach((route) => {
    if (route.auth !== undefined) {
        router.use(route.path, route.auth);
    }
    router.use(route.path, route.route);
});

router
    .get('/', (req, res) => {
        res.send('Hello World')
    });

export default router;


// const router = Router();

// module.export(router);