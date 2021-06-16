import express from 'express';

import { getItems, createItem } from '../controllers/items.js';
import { authenticateToken } from '../controllers/helpers/authenticateToken.js';

const router = express.Router();

router.get('/', authenticateToken, getItems);
router.post('/', createItem);

export default router;
