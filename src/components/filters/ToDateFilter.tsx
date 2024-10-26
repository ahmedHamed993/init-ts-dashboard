import React, { ChangeEvent, useState } from "react";
import useFilterParams from "../../hooks/useFilterParams";
import { TextField } from "@mui/material";

const ToDateFilter = () => {
  const { to, setTo } = useFilterParams();
  const [value, setValue] = useState(to.split(":")[0]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setTimeout(() => {
      setTo(`${e.target.value}T23:59`);
    }, 1500);
  };
  return (
    <TextField
      label="الي"
      type="date"
      value={value}
      onChange={handleChange}
      sx={{ flex: "1", minWidth: "230px" }}
    />
  );
};

export default ToDateFilter;
