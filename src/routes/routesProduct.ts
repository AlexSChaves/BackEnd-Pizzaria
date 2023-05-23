import { Router } from 'express';
import multer from 'multer';

import { CreateProductController } from '../controllers/products/CreateProductController';
import { ListByCategoryController } from '../controllers/products/ListByCategoryController';

import { isAuthenticated } from '../middlewares/isAuthenticated';

import uploadConfig from '../config/multer';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

router.post(
  '/product',
  isAuthenticated,
  upload.single('file'),
  new CreateProductController().handle
);
router.get(
  '/product/category',
  isAuthenticated,
  new ListByCategoryController().handle
);

export default router;
