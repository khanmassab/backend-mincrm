import User from '../models/User';
import httpStatus from 'http-status';

const createUser = async (body) => {
    if (await User.isEmailTaken(body.email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    return User.create(body);
}

const queryUsers = async (filter, options) => {
    const users = await User.paginate(filter, options);
    return users;
}
