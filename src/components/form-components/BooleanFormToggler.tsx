import React from "react";
// form
import {
  Controller,
  SetFieldValue,
  UseFormWatch,
  Control,
  FieldValues,
  Path,
} from "react-hook-form";
// mui
import { FormControlLabel, Switch } from "@mui/material";
type TProps<T extends FieldValues> = {
  control: Control<T>;
  setValue: SetFieldValue<T>;
  watch: UseFormWatch<T>;
  name: Path<T>;
  label: string;
};

const BooleanFormToggler = <T extends FieldValues>({
  control,
  setValue,
  watch,
  name,
  label,
}: TProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Switch
              {...field}
              checked={watch(name)}
              onChange={(e) => setValue(name, e.target.checked)}
            />
          }
          label={label}
        />
      )}
    />
  );
};

export default BooleanFormToggler;
