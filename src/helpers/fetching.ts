import { jwtDecode } from "jwt-decode";
import { LOCAL_STORAGE_USER_TOKEN_KEY } from "../utils/app-info";
import fireAlert from "./alerts/fireAlert";
const BASE_URL = process.env.REACT_APP_BASE_URL;
type Fetching = (
  endpoint: string,
  token?: string,
  method?: string,
  body?: any,
  contentType?: string
) => Promise<Response>;
const fetching: Fetching = (
  endpoint,
  token = undefined,
  method = "GET",
  body,
  contentType
) => {
  if (token) {
    if (isTokenExpired()) {
      handleLogout();
    }
  }

  const headers: HeadersInit = {};
  if (contentType) headers["Content-Type"] = contentType;
  if (token) headers["Authorization"] = `Bearer ${token}`;

  return fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: headers,
    body: body ? body : undefined,
  });
};
export default fetching;

function isTokenExpired() {
  if (window.localStorage.getItem(LOCAL_STORAGE_USER_TOKEN_KEY)) {
    const token = window.localStorage.getItem(LOCAL_STORAGE_USER_TOKEN_KEY);
    const decodedToken = jwtDecode(`${token}`);
    const exp = (decodedToken.exp || 1) * 1000;
    return exp <= Date.now();
  }
  return false;
}
function handleLogout() {
  window.localStorage.removeItem(LOCAL_STORAGE_USER_TOKEN_KEY);
  fireAlert("انتهت فترة سماحية الدخول, برجاء تسجيل الدخول مرة اخرى.");
  window.location.href = "/login";
  return Promise.reject("unauthorized");
}
