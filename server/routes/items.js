import express from 'express';

import { getItems, createItem } from '../controllers/items.js';
import { authenticateToken } from '../controllers/helpers/authenticateToken.js';

const router = express.Router();

router.post('/', authenticateToken, getItems);
router.post('/new', createItem);

export default router;
