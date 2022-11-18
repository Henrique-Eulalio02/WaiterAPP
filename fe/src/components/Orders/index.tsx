import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container} from './styles';

const orders: Order[] = [
  {
    '_id': '637531e96f8a021d561b4400',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza de Quatro Queijos',
          'imagePath': '1668622033986-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '637531e96f8a021d561b4401'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668623841721-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '637531e96f8a021d561b4402'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕕"
        title="Fila de espera"
        orders={orders}
      />

      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={[]}
      />

      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
