import bcrypt from 'bcryptjs';

import LoginInfo from '../models/userProfile.js';

export const createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = { username: req.body.username, password: hashedPassword };
        const newUser = new LoginInfo(user);

        await newUser.save();

        console.log('User: ' + user);

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log('Denied Registration');
    }
};
