import React from "react";
import { useSearchParams } from "react-router-dom";

const usePageParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let page: number = 1;
  const pageParam = searchParams.get("page");
  if (pageParam) {
    const n = parseInt(pageParam, 10);
    if (!isNaN(n) && n > 1) page = n;
  }
  const setPage = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };
  return { page, setPage };
};

export default usePageParams;
