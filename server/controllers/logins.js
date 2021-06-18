import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import ProfileInfo from '../models/userProfile.js';
import accessTokenSecret from '../secrets/secrets.js';

export const getProfile = async (req, res) => {
    try {
        const profileInfo = await ProfileInfo.find();

        res.status(200).json(profileInfo);
    } catch (error) {
        res.status(400).json({ message: ErrorEvent.message });
    }
};

export const logUserIn = async (req, res) => {
    const userFromDB = await ProfileInfo.findOne({
        username: req.body.username,
    });

    if (userFromDB == null) {
        return res.status(400).json('Cannot find User');
    }

    try {
        if (await bcrypt.compare(req.body.password, userFromDB.password)) {
            const username = req.body.username;
            const user = { username: username };

            const accessToken = jwt.sign(
                user,
                accessTokenSecret.jwt.accessTokenSecret,
                { expiresIn: '15m' }
            );

            res.status(200).json({ token: accessToken, username: username });
        } else {
            res.sendStatus(405);
        }
    } catch (error) {
        res.status(500);
    }
};
