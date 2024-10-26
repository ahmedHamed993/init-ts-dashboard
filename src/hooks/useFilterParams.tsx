import { useSearchParams } from "react-router-dom";
// types
// import { type IsDisabledFilter, type IsConfirmedFilter } from "../lib/types";
type IsDisabledFilter = any;
type IsConfirmedFilter = any;
// constants
const IS_DISABLED_DEFAULT_VALUE = "is_disabled:eq:true|false";
const IS_CONFIRMED_DEFAULT_VALUE = "is_confirmed:eq:true|false";
const FROM_DEFAULT_VALUE = "";
const TO_DEFAULT_VALUE = "";
const BUSINESS_STATUS_DEFAULT_VALUE = "status:eq:accepted|denied|pending";

const useFilterParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isDisabled =
    searchParams.get("isDisabled") || IS_DISABLED_DEFAULT_VALUE;

  const isConfirmed =
    searchParams.get("isConfirmed") || IS_CONFIRMED_DEFAULT_VALUE;

  const from = searchParams.get("from") || FROM_DEFAULT_VALUE;
  const to = searchParams.get("to") || TO_DEFAULT_VALUE;

  const businessStatus =
    searchParams.get("business_status") || BUSINESS_STATUS_DEFAULT_VALUE;

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

  const setFrom = (value: string) => {
    searchParams.set("from", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const setTo = (value: string) => {
    searchParams.set("to", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const setBusinessStatus = (value: string) => {
    searchParams.set("business_status", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  return {
    isDisabled,
    setIsDisabled,
    isConfirmed,
    setIsConfirmed,
    from,
    setFrom,
    to,
    setTo,
    businessStatus,
    setBusinessStatus,
  };
};

export default useFilterParams;
