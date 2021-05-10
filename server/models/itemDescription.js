import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    title: String,
    manufacturer: String,
    purchaseDate: String,
    bestBeforeDate: String,
    ammount: Number,
    isPackaged: Boolean,
    tags: [String],
});

const ItemDescription = mongoose.model('ItemDescription', itemSchema);

export default ItemDescription;