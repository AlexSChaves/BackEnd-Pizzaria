import { Router } from 'express';

import { CreateOrderController } from '../controllers/order/CreateOrderController';
import { RemoveOrderController } from '../controllers/order/RemoveOrderController';
import { AddItemController } from '../controllers/order/AddItemController';
import { RemoveItemController } from '../controllers/order/RemoveItemController';
import { SendOrderController } from '../controllers/order/SendOrderController';
import { ListOrdersController } from '../controllers/order/ListOrdersController';
import { FinishOrderController } from '../controllers/order/FinishOrderController';

import { isAuthenticated } from '../middlewares/isAuthenticated';
import { DetailOrderController } from '../controllers/order/DetailOrderController';

const router = Router();

router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.delete(
  '/order/remove',
  isAuthenticated,
  new RemoveItemController().handle
);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);
router.get('/order', isAuthenticated, new ListOrdersController().handle);
router.get(
  '/order/detail',
  isAuthenticated,
  new DetailOrderController().handle
);
router.put(
  '/order/finish',
  isAuthenticated,
  new FinishOrderController().handle
);

export default router;
