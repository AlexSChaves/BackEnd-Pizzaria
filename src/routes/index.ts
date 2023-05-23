import { Router } from 'express';

import categoryRoutes from './routesCategory';
import productRoutes from './routesProduct';
import userRoutes from './routesUser';
import orderRoutes from './routesOrder';

const router = Router();

router.use('/', userRoutes);
router.use('/', categoryRoutes);
router.use('/', productRoutes);
router.use('/', orderRoutes);

export { router };
