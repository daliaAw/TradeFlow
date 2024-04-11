import sendRequest from "./send-request";
const BASE_URL = "/api/business-users";

export async function businessSignUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}
