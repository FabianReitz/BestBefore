import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    manufacturer: {
        type: String,
        required: true,
    },
    purchaseDate: {
        type: String,
        required: true,
    },
    bestBeforeDate: {
        type: String,
        required: true,
    },
    ammount: {
        type: String,
    },
    tags: [String],
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

const ItemDescription = mongoose.model('ItemDescription', itemSchema);

export default ItemDescription;
