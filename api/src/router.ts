import path from 'path';
import { Router } from 'express';
import multer from 'multer';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// listar categorias
router.get('/categories', listCategories);

// criar categoria
router.post('/categories', createCategory);

// listar produtos
router.get('/products', listProducts);

// criar produto
router.post('/products', upload.single('image'), createProduct);

// selecionar produtos por categoria
router.get('/categories/:categoryId/products', listProductsByCategory);

// listar pedidos
router.get('/orders', listOrders);

// criar pedido
router.post('/orders', createOrder);

// mudar status do pedido
router.patch('/orders/:orderId', changeOrderStatus);

// deletar pedido
router.delete('/orders/:orderId', cancelOrder);
