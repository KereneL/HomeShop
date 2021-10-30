import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    is_admin: {type: Boolean, required: true},
    active_cart_id: {type: Schema.Types.ObjectId, ref: 'Cart'},
})

const Users = mongoose.model('User', userSchema);

export default Users;