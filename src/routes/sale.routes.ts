import { Router } from 'express';
import { verifyToken, requireRole } from '../middleware/auth';
import { createSale, listSales, getSale } from '../controllers/sale.controller';

const router = Router();

router.use(verifyToken);

router.post('/', requireRole('admin', 'manager', 'sales'), createSale);
router.get('/', requireRole('admin', 'manager', 'sales'), listSales);
router.get('/:id', requireRole('admin', 'manager', 'sales'), getSale);

export default router;
