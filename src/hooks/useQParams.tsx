import { useSearchParams } from "react-router-dom";

const useQParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const setSearch = (searchValue: string) => {
    searchParams.set("search", searchValue);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };
  return { search, setSearch };
};
export default useQParams;
