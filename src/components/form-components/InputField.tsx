import React from "react";
// mui
import { TextField } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

type TProps = {
  name: string;
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  errorMessage: string | undefined;
  multiline?: boolean;
  minRows?: number;
  rows?: number;
  maxRows?: number;
  defaultValue?: any;
  disabled?: boolean;
  styles?: any;
  readOnly?: boolean;
  step?: number;
};
const InputField = ({
  name,
  label,
  register,
  type,
  errorMessage,
  multiline,
  minRows,
  rows,
  maxRows,
  defaultValue,
  disabled = false,
  styles,
  readOnly = false,
  step = 0.01,
}: TProps) => {
  return (
    <TextField
      id={name}
      type={type}
      label={label}
      {...register}
      error={errorMessage ? true : false}
      helperText={errorMessage}
      multiline={multiline}
      minRows={minRows}
      maxRows={maxRows}
      rows={rows}
      defaultValue={defaultValue}
      disabled={disabled}
      sx={{ backgroundColor: "#fff !important", ...styles }}
      inputProps={{
        step: step,
        readOnly: readOnly,
      }}
    />
  );
};

export default InputField;
