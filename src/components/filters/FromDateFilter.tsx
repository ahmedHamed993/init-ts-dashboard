import { TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import useFilterParams from "../../hooks/useFilterParams";

const FromDateFilter = () => {
  const { from, setFrom } = useFilterParams();
  const [value, setValue] = useState(from.split(":")[0]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setTimeout(() => {
      setFrom(`${e.target.value}T00:00`);
    }, 1500);
  };

  return (
    <TextField
      label="من"
      type="date"
      value={value}
      onChange={handleChange}
      sx={{ flex: "1", minWidth: "230px" }}
    />
  );
};

export default FromDateFilter;
