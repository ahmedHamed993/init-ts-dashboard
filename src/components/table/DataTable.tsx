import React, { Dispatch, SetStateAction, useState } from "react";
// mui components
import { Box, Pagination } from "@mui/material";
import { DataGrid, GridColDef, useGridApiContext } from "@mui/x-data-grid";
type Props = {
    rows: any;
    columns: GridColDef[];
    itemsPerPage: number;
    totalItems: number;
    page: number;
    setPage: Dispatch<SetStateAction<number>> | any;
};

const DataTable = ({
    rows,
    columns,
    itemsPerPage,
    totalItems,
    page,
    setPage,
}: Props) => {
    // custom pagination for grid
    function CustomPagination() {
        const apiRef = useGridApiContext();
        return (
            <Pagination
                color="primary"
                count={Math.ceil(totalItems / itemsPerPage)}
                page={page}
                defaultPage={1}
                onChange={(event, value) => {
                    apiRef.current.setPage(value);
                    setPage(value);
                }}
            />
        );
    }

    return (
        <Box className="datagrid" width="100%" sx={{ overflow: "auto" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id}
                pagination
                slots={{
                    pagination: CustomPagination,
                }}
                paginationMode="server"
                paginationModel={{
                    page: page - 1,
                    pageSize: itemsPerPage,
                }}
                autoHeight
                rowCount={totalItems}
            />
        </Box>
    );
};

export default DataTable;
