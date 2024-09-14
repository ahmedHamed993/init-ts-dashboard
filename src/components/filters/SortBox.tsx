import { useState } from "react";
// mui
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
} from "@mui/material";
// hooks
import useSortParams from "../../hooks/useSortParams";
type SortOptions = {
  sortTitle: string;
  sortKey: string;
};
type Props = {
  sortingOptions?: SortOptions[];
};
const defaultSortingOptions: SortOptions[] = [
  {
    sortTitle: "الاسم (أ - ى)",
    sortKey: "name",
  },
  {
    sortTitle: "الاسم (ي - أ)",
    sortKey: "-name",
  },
  {
    sortTitle: "تاريخ الانشاء من الاقدم الي الحدث",
    sortKey: "created_at",
  },
  {
    sortTitle: "تاريخ الانشاء من الاحدث الي الاقدم",
    sortKey: "-created_at",
  },
  {
    sortTitle: "تاريخ التحديث من الاقدم الي الاحدث",
    sortKey: "updated_at",
  },
  {
    sortTitle: "تاريخ التحديث من الاحدث الي الاقدم",
    sortKey: "-updated_at",
  },
];

const SortBox = ({ sortingOptions = defaultSortingOptions }: Props) => {
  const { sortParam, setSortParam } = useSortParams();
  const handleChange = (e: SelectChangeEvent<string>) => {
    setSortParam(e.target.value);
  };
  return (
    <Box sx={{ flex: "1", minWidth: "230px" }}>
      <FormControl fullWidth sx={{ backgroundColor: "#fff" }}>
        <InputLabel>ترتيب حسب</InputLabel>
        <Select
          value={sortParam as string}
          label={"ترتيب حسب"}
          onChange={handleChange}
        >
          {sortingOptions.map((option: SortOptions) => (
            <MenuItem value={option.sortKey} key={option.sortKey}>
              {option.sortTitle}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBox;
