import sendRequest from "./send-request";

const BASE_URL = "/api/users/favorites";

export async function addToFavorites(itemId) {
    return sendRequest(`${BASE_URL}/add/${itemId}`, 'POST');
}

export async function removeFavorite(itemId) {
    return sendRequest(`${BASE_URL}/remove/${itemId}`, 'DELETE');
}

export async function getFavorites() {
    return sendRequest(`${BASE_URL}/index`);
}