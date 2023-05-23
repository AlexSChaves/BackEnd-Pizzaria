import { Request, Response } from 'express';
import { DetailOrderService } from '../../services/order/DetailOrderService';

class DetailOrderController {
  async handle(req: Request, res: Response) {
    const detailOrder = new DetailOrderService();

    const order_id = req.query.order_id as string;

    const orders = await detailOrder.execute({ order_id });

    console.log(orders);

    return res.json(orders);
  }
}

export { DetailOrderController };
