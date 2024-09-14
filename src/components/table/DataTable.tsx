// mui
import {
    DataGrid,
    GridColDef,
    gridPageCountSelector,
    useGridApiContext,
    useGridSelector,
  } from "@mui/x-data-grid";
  import { Box, Pagination, Stack } from "@mui/material";
  // components
  import NoItems from "../alerts/NoItems";
  // hooks
  import usePageParams from "../../hooks/usePageParams";
  
  type Props = {
    rows: any[];
    columns: GridColDef[];
    itemsPerPage?: number;
    totalItems?: number;
  };
  
  const CustomPagination = () => {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const { page, setPage } = usePageParams();
    return (
      <Pagination
        // sx={{direction:MuiTheme.direction}}
        color="primary"
        count={pageCount}
        page={page}
        defaultPage={1}
        onChange={(event, value) => {
          apiRef.current.setPage(value);
          setPage(value);
        }}
        sx={{
          "& .MuiButtonBase-root": {
            direction: "ltr !important",
          },
        }}
      />
    );
  };
  
  const DataTable = ({
    rows,
    columns,
    itemsPerPage = 20,
    totalItems = 20,
  }: Props) => {
    const { page } = usePageParams();
    if (rows.length === 0) return <NoItems />;
    return (
      <Box>
        <DataGrid
          getRowId={(row) => row.id}
          rows={rows}
          columns={columns}
          pagination
          paginationMode="server"
          paginationModel={{
            page: page - 1,
            pageSize: itemsPerPage,
          }}
          autoHeight
          rowCount={totalItems}
          slots={{ pagination: CustomPagination }}
        />
      </Box>
    );
  };
  
  export default DataTable;
  