import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    cart_id: {type: Schema.Types.ObjectId, ref: 'Cart'},
    date_ordered: {type: Date, required: true},
    address: {type: String, required: true},
    supply_date: {type: Date, required: true},
    cc_four_digis: {type: String, required: true},
    total_cost: {type: Number, required: true}
})


const Orders = mongoose.model('Order', orderSchema);

export default Orders;