import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserModelSchema = new mongoose.Schema({
    first_name: {type: String, set: v => v.toLowerCase(), required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, set: v => hashPassword(v), required: true},
});

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}
UserModelSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

UserModelSchema.statics.compareHash = async function (password, email) {
    const user = await this.findOne({ email: email });
    if (user) {
        return bcrypt.compareSync(password, this.password);
    }
}
const User = mongoose.model("users", UserModelSchema);

export default User;