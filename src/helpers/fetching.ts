import { jwtDecode } from "jwt-decode";
import { LOCAL_STORAGE_USER_TOKEN_KEY } from "../utils/app-info";
import fireAlert from "./alerts/fireAlert";
const BASE_URL = process.env.REACT_APP_BASE_URL;
type Fetching = (
  endpoint: string,
  method?: string,
  headers?: Record<string, any>,
  body?: any,
  checkAuth?: boolean
) => Promise<Response>;
const fetching: Fetching = (
  endpoint,
  method = "GET",
  headers = {},
  body,
  checkAuth = true
) => {
  if (checkAuth) {
    if (headers?.hasOwnProperty("Authorization")) {
      if (isTokenExpired()) {
        window.localStorage.removeItem(LOCAL_STORAGE_USER_TOKEN_KEY);
        fireAlert("انتهت فترة سماحية الدخول, برجاء تسجيل الدخول مرة اخرى.");
        window.location.href = "/login";
        return Promise.reject("unauthorized");
      }
    }
  }
  const options: Record<string, any> = {
    method,
    headers,
  };
  if (body) options["body"] = body;

  return fetch(`${BASE_URL}${endpoint}`, options);
  // .then((data) => data);
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
