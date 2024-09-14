import React, { SetStateAction, Dispatch } from "react";
import { Pagination } from "@mui/material";
import usePageParams from "../../hooks/usePageParams";
type TProps = {
  totalItems: number;
  itemsPerPage: number;
};
const PagePagination = ({ totalItems, itemsPerPage }: TProps) => {
  const { page, setPage } = usePageParams();
  return totalItems > 0 ? (
    <Pagination
      count={Math.ceil(totalItems / itemsPerPage)}
      page={page}
      defaultPage={1}
      onChange={(event, value) => {
        setPage(value);
      }}
      color="primary"
      variant="outlined"
      sx={{ margin: "auto" }}
    />
  ) : (
    <></>
  );
};

export default PagePagination;
