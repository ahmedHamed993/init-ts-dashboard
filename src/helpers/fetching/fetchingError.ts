import { UseFormSetError } from "react-hook-form";
import fireAlert from "../alerts/fireAlert";
/*
  data :  object return from the backend
  key : key if exist in data object so request success 
  setError : from react-hook-form to set field error 
  successReq : fn called when request is success
*/
export const fetchingError = (
  data: { [key: string]: any },
  setError: UseFormSetError<any>
) => {
  if (data.status === 422) {
    setFieldErrors(data.errors, setError);
  } else {
    fireAlert(data.message?.toString(), "error");
  }
};

export const setFieldErrors = (
  errors: [{ [key: string]: "string" }],
  setError: UseFormSetError<any>
) => {
  for (let key in errors) {
    setError(key as any, { message: errors[key].toString() });
  }
  // return 0;
};
