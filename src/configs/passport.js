import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();

const config = (passport) => {
    const options = {};
    options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    options.secretOrKey = process.env.PASSPORT_SECRET;
    passport.use(new JwtStrategy(options, function(jwt_payload, done) {
        const user = User.findOne({ id: jwt_payload.id }).then(() => {
            if (user) {
                try {
                    if (user) {
                        done(null, user);
                    } else {
                        done(null, false);
                    }
                } catch (error) {
                    return done(error, false, { message: 'Error finding user' });
                }
            }
        });
    }));
};

export default config;
