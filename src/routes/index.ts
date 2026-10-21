import { Router } from 'express';
import authRoutes from './auth.routes';
import healthRoutes from './health.routes';
import productRoutes from './product.routes';
import saleRoutes from './sale.routes';
import dashboardRoutes from './dashboard.routes';
import categoryRoutes from './category.routes';
import userRoutes from './user.routes';
import reportRoutes from './report.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/health', healthRoutes);
router.use('/products', productRoutes);
router.use('/sales', saleRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/categories', categoryRoutes);
router.use('/users', userRoutes);
router.use('/reports', reportRoutes);

export default router;
