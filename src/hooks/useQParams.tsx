import { useSearchParams } from "react-router-dom";

const useQParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const qValue = searchParams.get("search") || "";

  const setQValue = (searchValue: string) => {
    searchParams.set("search", searchValue);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };
  return { qValue, setQValue };
};
export default useQParams;
