import jwt from 'jsonwebtoken';

import accessTokenSecret from '../../secrets/secrets.js';

export const authenticateToken = (req, res, next) => {
    const accessToken = req.body.token;
    if (!accessToken) return res.sendStatus(401);

    jwt.verify(
        accessToken,
        accessTokenSecret.jwt.accessTokenSecret,
        (err, username) => {
            if (err) return res.sendStatus(403);
            next();
        }
    );
};
