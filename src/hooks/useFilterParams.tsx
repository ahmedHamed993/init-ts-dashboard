import { useSearchParams } from "react-router-dom";
// types
// import { type IsDisabledFilter, type IsConfirmedFilter } from "../lib/types";
type IsDisabledFilter = any;
type IsConfirmedFilter = any;
// constants
const IS_DISABLED_DEFAULT_VALUE = "is_disabled:eq:true|false";
const IS_CONFIRMED_DEFAULT_VALUE = "is_confirmed:eq:true|false";
const STATUS_DEFAULT_VALUE = "status:eq:denied|accepted|pending";
const CUSTOMER_STATUS_DEFAULT_VALUE = "status:eq:attended|registered|canceled";
const useFilterParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isDisabled =
    searchParams.get("isDisabled") || IS_DISABLED_DEFAULT_VALUE;

  const isConfirmed =
    searchParams.get("isConfirmed") || IS_CONFIRMED_DEFAULT_VALUE;

  const status = searchParams.get("status") || STATUS_DEFAULT_VALUE;
  const customerStatus =
    searchParams.get("customerStatus") || CUSTOMER_STATUS_DEFAULT_VALUE;

  const setIsDisabled = (value: IsDisabledFilter) => {
    searchParams.set("isDisabled", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const setIsConfirmed = (value: IsConfirmedFilter) => {
    searchParams.set("isConfirmed", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const setStatus = (value: string) => {
    searchParams.set("status", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const setCustomerStatus = (value: string) => {
    searchParams.set("customerStatus", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  return {
    isDisabled,
    setIsDisabled,
    isConfirmed,
    setIsConfirmed,
    status,
    setStatus,
    customerStatus,
    setCustomerStatus,
  };
};

export default useFilterParams;
