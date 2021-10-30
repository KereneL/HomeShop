import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    initial_date: {type: Date, required: true},
    user_id: {type: Schema.Types.ObjectId, ref: 'User'}
})


const Carts = mongoose.model('Cart', cartSchema);

export default Carts;