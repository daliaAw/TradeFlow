import React from 'react'

function OrderHistoryPage() {
  return (
    <div>OrderHistoryPage</div>
  )
}

export default OrderHistoryPage 

//import { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import MenuListItem from '../../components/MenuListItem/MenuListItem';
// import CategoryList from '../../components/CategoryList/CategoryList';
// import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import * as ordersAPI from '../../utilities/orders-api';
// import * as itemsAPI from '../../utilities/items-api';

// export default function OrderHistoryPage() {
//   const [menuItems, setMenuItems] = useState([]);
//   const [activeCat, setActiveCat] = useState('');
//   const [cart, setCart] = useState(null);
//   const categoriesRef = useRef([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const items = await itemsAPI.getAll();
//         const categories = [...new Set(items.map(item => item.category.name))];
//         categoriesRef.current = categories;
//         setMenuItems(items);
//         setActiveCat(categories[0]);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//     async function fetchCart() {
//       try {
//         const cart = await ordersAPI.getCart();
//         setCart(cart);
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//       }
//     }

//     fetchCart();
//   }, []);

//   async function handleAddToOrder(itemId) {
//     try {
//       const updatedCart = await ordersAPI.addItemToCart(itemId);
//             alert(`add item: ${itemId}`);

//       setCart(updatedCart);
//     } catch (error) {
//       console.error('Error adding item to cart:', error);
//     }
//   }

//   async function handleChangeQty(itemId, newQty) {
//     try {
//       const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
//       setCart(updatedCart);
//     } catch (error) {
//       console.error('Error changing item quantity in cart:', error);
//     }
//   }

//   async function handleCheckout() {
//     try {
//       await ordersAPI.checkout();
//       navigate('/orders');
//     } catch (error) {
//       console.error('Error during checkout:', error);
//     }
//   }

//   return (
//     <main className="NewOrderPage">
//       <aside>
//         <CategoryList
//           categories={categoriesRef.current}
//           activeCat={activeCat}
//           setActiveCat={setActiveCat}
//         />
//         <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
//       </aside>
//       {menuItems
//         .filter(item => item.category.name === activeCat)
//         .map(item => (
//           <MenuListItem
//             key={item._id}
//             menuItem={item}
//             handleAddToOrder={handleAddToOrder}
//           />
//         ))}
//       <OrderDetail
//         order={cart}
//         handleChangeQty={handleChangeQty}
//         handleCheckout={handleCheckout}
//       />
//     </main>
//   );
// }
