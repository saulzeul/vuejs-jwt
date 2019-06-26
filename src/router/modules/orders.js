import Orders from '@/views/Orders'
import Products from '@/views/Orders/products'
const orders = {
    path: '/orders', 
    name: 'orders',
    component: Orders,
    meta: 'PEDIDOS',
    children: [
        {
            path: ':products',
            name: 'products',
            component: Products
        }
    ]
}
export default orders