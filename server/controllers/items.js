import ItemDescription from '../models/itemDescription.js';

export const getItems = async (req, res) => {
    try {
        const itemDescriptions = await ItemDescription.find();

        res.status(200).json(itemDescriptions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createItem = async (req, res) => {
    const item = req.body;

    const newItem = new ItemDescription(item);

    try {
        await newItem.save();

        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
