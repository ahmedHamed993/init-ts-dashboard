import { useSearchParams } from "react-router-dom";
const useSortParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sorts") || "created_at";

  const setSort = (sortValue: string) => {
    searchParams.set("sorts", sortValue);
    setSearchParams(searchParams);
  };
  return { sort, setSort };
};
export default useSortParams;
