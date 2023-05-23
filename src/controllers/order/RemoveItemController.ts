import { Request, Response } from 'express';
import { RemoveItemService } from '../../services/order/RemoveItemService';

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const removeItem = new RemoveItemService();

    const item_id = req.query.item_id as string;

    const item = await removeItem.execute({ item_id });

    res.json({ message: `${item.id} removed successfully` });
  }
}

export { RemoveItemController };
