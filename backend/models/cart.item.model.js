import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    product_id: {type: Schema.Types.ObjectId, ref: 'Product'},
    amount: {type: Number, required: true},
    combined_cost: {type: Number, required: true},
    cart_id: {type: Schema.Types.ObjectId, ref: 'Cart'},
})


const CartItems = mongoose.model('CartItem', cartItemSchema);

export default CartItems;