import React, { useState, FC, ReactNode } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
// icons
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
// form
import { UseFormRegisterReturn } from "react-hook-form";
type Props = {
  label: string;
  register: UseFormRegisterReturn;
  errorMessage: string | null | undefined;
};
const PasswordField = ({ label, register, errorMessage }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // ---------- toggle show password ---------------------------
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  // handle errors
  return (
    <FormControl>
      <InputLabel
        htmlFor="outlined-adornment-password"
        error={errorMessage ? true : false}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        type={showPassword ? "text" : "password"}
        label={label}
        {...register}
        error={errorMessage ? true : false}
        sx={{ backgroundColor: "#fff" }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {errorMessage ? (
        <FormHelperText error={errorMessage ? true : false}>
          {errorMessage}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default PasswordField;
