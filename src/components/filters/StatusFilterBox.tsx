import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
} from "@mui/material";
// types
import { type IsDisabledFilter } from "../../types/types";
import useFilterParams from "../../hooks/useFilterParams";

type TStatusFilter = {
  filterTitle: string;
  filterKey: IsDisabledFilter;
};
// filters option
const statusFiltersOptions: TStatusFilter[] = [
  {
    filterTitle: "الكل",
    filterKey: "is_disabled:eq:true|false",
  },
  {
    filterTitle: "مفعل",
    filterKey: "is_disabled:eq:false",
  },
  {
    filterTitle: "معطل",
    filterKey: "is_disabled:eq:true",
  },
];

const StatusFilterBox = () => {
  const { isDisabled, setIsDisabled } = useFilterParams();
  const handleChange: any = (e: SelectChangeEvent<string>) => {
    setIsDisabled(e.target.value as IsDisabledFilter);
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
          value={isDisabled}
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

export default StatusFilterBox;
