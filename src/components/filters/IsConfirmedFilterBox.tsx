import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
} from "@mui/material";
// hooks
import useFilterParams from "../../hooks/useFilterParams";
// types
import type { IsConfirmedFilter } from "../../types/types";

type TStatusFilter = {
  filterTitle: string;
  filterKey: IsConfirmedFilter;
};
// filters option
const statusFiltersOptions: TStatusFilter[] = [
  {
    filterTitle: "الكل",
    filterKey: "is_confirmed:eq:true|false",
  },
  {
    filterTitle: "مؤكدة",
    filterKey: "is_confirmed:eq:true",
  },
  {
    filterTitle: "غير مؤكدة",
    filterKey: "is_confirmed:eq:false",
  },
];

const IsConfirmedFilterBox = () => {
  const { isConfirmed, setIsConfirmed } = useFilterParams();
  const handleChange: any = (e: SelectChangeEvent<string>) => {
    setIsConfirmed(e.target.value as IsConfirmedFilter);
  };
  return (
    <Box
      sx={{
        flex: "1",
        minWidth: "230px",
      }}
    >
      <FormControl fullWidth sx={{ backgroundColor: "#fff" }}>
        <InputLabel>الحالة</InputLabel>
        <Select
          name="status_filter"
          value={isConfirmed}
          label={"الحالة"}
          onChange={handleChange}
        >
          {statusFiltersOptions.map((option: TStatusFilter, index: number) => {
            return (
              <MenuItem value={option.filterKey} key={index + Date.now()}>
                {option.filterTitle}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default IsConfirmedFilterBox;
