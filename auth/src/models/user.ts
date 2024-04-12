import mongoose from "mongoose";

interface UserAttrs {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const UserModel = mongoose.model('User', userSchema);

const buildUser = (attrs: UserAttrs) => {
    return new User(attrs);
};

class User extends mongoose.Model {
    constructor(attrs: UserAttrs) {
        super(attrs);
    }

    static build(attrs: UserAttrs) {
        return new UserModel(attrs);
    }
}
