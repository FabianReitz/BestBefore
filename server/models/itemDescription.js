import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    title: String,
    manufacturer: String,
    purchaseDate: {
        type: Date,
        default: new Date()
    },
    bestBeforeDate: {
        type: Date,
        default: new Date()
    },
    isPackaged: Boolean,
    tags: [String],
});

const ItemDescription = mongoose.model('ItemDescription', itemSchema);

export default ItemDescription;