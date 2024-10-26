import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
} from "@mui/material";
// types
import { type BusinessStatusFilter } from "../../types/types";
import useFilterParams from "../../hooks/useFilterParams";

type TStatusFilter = {
  filterTitle: string;
  filterKey: BusinessStatusFilter;
};
// filters option
const statusFiltersOptions: TStatusFilter[] = [
  {
    filterTitle: "الكل",
    filterKey: "status:eq:accepted|denied|pending",
  },
  {
    filterTitle: "مقبول",
    filterKey: "status:eq:accepted",
  },
  {
    filterTitle: "معلق",
    filterKey: "status:eq:pending",
  },
  {
    filterTitle: "مرفوض",
    filterKey: "status:eq:denied",
  },
];

const BusinessStatusFilterBox = () => {
  const { businessStatus, setBusinessStatus } = useFilterParams();
  const handleChange: any = (e: SelectChangeEvent<string>) => {
    setBusinessStatus(e.target.value as BusinessStatusFilter);
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
          name="business_status_filter"
          value={businessStatus}
          label={"الحالة"}
          onChange={handleChange}
        >
          {statusFiltersOptions.map((option: TStatusFilter, index: number) => {
            return (
              <MenuItem value={option.filterKey} key={option.filterKey}>
                {option.filterTitle}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BusinessStatusFilterBox;
