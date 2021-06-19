import express from 'express';

import { getItems, createItem, deleteItem } from '../controllers/items.js';
import { authenticateToken } from '../controllers/helpers/authenticateToken.js';

const router = express.Router();

router.post('/', authenticateToken, getItems);
router.post('/new', createItem);
router.post('/delete', authenticateToken, deleteItem);

export default router;
