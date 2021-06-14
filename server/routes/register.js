import express from 'express';

import { createUser } from '../controllers/registrations.js';

const router = express.Router();

router.post('/', createUser);

export default router;
