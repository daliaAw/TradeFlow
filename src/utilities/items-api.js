import sendRequest from "./send-request";
import axios from 'axios';

const BASE_URL = "/api/items";

export async function index(){
    return sendRequest(BASE_URL);
}
export function getAll() {
  return sendRequest(BASE_URL);
}

// Won't be used in SEI CAFE, but demonstrates
// what you might need if you have a, for example,
// a MovieDetailPage component
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function display(){
    return sendRequest(`${BASE_URL}/items`);
}

export async function createItem(item){
    return sendRequest(`${BASE_URL}/new`, 'POST', item);
}
// export function addItemToCart(itemId){
//     return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
// }



// const BASE_URLL = "/api/cart";

// export const addItemToCart = async (itemId, quantity) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/items/${itemId}`, { quantity });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

export const getItemDetails = async (itemId) => {
    try {
      const response = await axios.get(`/api/items/${itemId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };