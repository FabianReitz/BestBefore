import ItemDescription from '../models/itemDescription.js';
import jwt from 'jsonwebtoken';

export const getItems = async (req, res) => {
    try {
        const username = jwt.decode(req.body.token).username;
        const itemDescriptions = await ItemDescription.find({
            author: username,
        });

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

export const deleteItem = async (req, res) => {
    const itemID = req.body.itemID;

    try {
        if (!itemID) return res.send(404);
        console.log(itemID);
        ItemDescription.deleteOne({ _id: itemID }, function (error) {
            if (error) res.status(500).json({ message: error.message });
        });
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
