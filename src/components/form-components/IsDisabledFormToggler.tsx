import React from "react";
// form
import {
  Controller,
  SetFieldValue,
  UseFormWatch,
  Control,
  FieldValues,
} from "react-hook-form";
// mui
import { FormControlLabel, Switch } from "@mui/material";
type TProps<T extends FieldValues> = {
  control: Control<T>;
  setValue: SetFieldValue<T>;
  watch: UseFormWatch<T>;
};
const IsDisabledFormToggler = ({ control, setValue, watch }: TProps<any>) => {
  return (
    <Controller
      name={"is_disabled"}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Switch
              {...field}
              checked={!watch("is_disabled")}
              onChange={(e) => setValue("is_disabled", !e.target.checked)}
            />
          }
          label={!watch("is_disabled") ? "مفعلة" : "معطلة"}
        />
      )}
    />
  );
};

export default IsDisabledFormToggler;
