import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {type: String, required: true}
})

const Categories = mongoose.model('Category', categorySchema);

export default Categories;