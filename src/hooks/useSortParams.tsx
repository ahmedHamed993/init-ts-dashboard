import { useSearchParams } from "react-router-dom";
const useSortParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParam = searchParams.get("sorts") || "created_at";

  const setSortParam = (sortValue: string) => {
    searchParams.set("sorts", sortValue);
    setSearchParams(searchParams);
  };
  return { sortParam, setSortParam };
};
export default useSortParams;
