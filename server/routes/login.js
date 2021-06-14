import express from 'express';

import { getLogin } from '../controllers/logins.js';

const router = express.Router();

router.get('/', getLogin);

export default router;
