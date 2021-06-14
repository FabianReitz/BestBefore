import express from 'express';

import { getProfile, logUserIn } from '../controllers/logins.js';

const router = express.Router();

router.get('/', getProfile);
router.post('/', logUserIn);

export default router;
