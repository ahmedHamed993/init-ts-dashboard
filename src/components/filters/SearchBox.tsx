import React, { ChangeEvent, useCallback, useState } from "react";
// mui
import { TextField } from "@mui/material";
// hooks
import useQParams from "../../hooks/useQParams";

type Props = {};

const SearchBox = (props: Props) => {
  const { qValue, setQValue } = useQParams();
  const [value, setValue] = useState<string>(qValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setTimeout(() => {
      setQValue(e.target.value);
    }, 1500);
  };

  return (
    <TextField
      name="search_box"
      id="search_box"
      label="search"
      value={value}
      onChange={handleChange}
      sx={{
        flex: "1",
        minWidth: "230px",
        backgroundColor: "#fff",
      }}
    />
  );
};

export default SearchBox;
