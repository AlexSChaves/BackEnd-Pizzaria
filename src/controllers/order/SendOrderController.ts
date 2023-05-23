import { Request, Response } from 'express';
import { SendOrderService } from '../../services/order/SendOrderService';

class SendOrderController {
  async handle(req: Request, res: Response) {
    const sendOrder = new SendOrderService();

    const { order_id } = req.body;

    const order = await sendOrder.execute({ order_id });

    return res.json(order);
  }
}

export { SendOrderController };
