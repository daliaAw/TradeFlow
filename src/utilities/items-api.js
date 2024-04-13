import sendRequest from "./send-request";

const BASE_URL = "/api/items";

export async function index() {
  return sendRequest(BASE_URL);
}

export async function display() {
  return sendRequest(`${BASE_URL}/items`);
}

export async function createItem(item) {
  return sendRequest(`${BASE_URL}/new`, "POST", item);
}

export async function createReview(review) {
  return sendRequest(`${BASE_URL}/create-review`, "POST", review);
}

export async function getReviews() {
  return sendRequest(BASE_URL);
}
