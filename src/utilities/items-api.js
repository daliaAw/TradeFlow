import sendRequest from "./send-request";

const BASE_URL = "/api/items";

export async function index(){
    return sendRequest(BASE_URL);
}

export async function display(){
    return sendRequest(`${BASE_URL}/items`);
}

export async function createItem(item){
    return sendRequest(`${BASE_URL}/new`, 'POST', item)
}

export async function deleteItem(productId){
    console.log(productId, "api")
    return sendRequest(`${BASE_URL}/${productId}`, 'DELETE')
    // return sendRequest(`${BASE_URL}/delete`, 'DELETE')
}

export async function updateItem(){
    return sendRequest(`${BASE_URL}/update`, 'UPDATE')
}