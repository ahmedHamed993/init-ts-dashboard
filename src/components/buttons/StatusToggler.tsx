import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import fetching from "../../helpers/fetching";
import { useSelector } from "react-redux";
import { UserSliceState } from "../../types/types";
import fireAlert from "../../helpers/alerts/fireAlert";
type Props = {
  defaultValue: boolean;
  apiPath: string;
};

const StatusToggler = ({ defaultValue, apiPath }: Props) => {
  const userToken = useSelector(
    (state: UserSliceState) => state.user.userToken
  );
  const [checked, setChecked] = useState(!defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    fetching(apiPath);
    fetching(
      apiPath,
      userToken,
      "PUT",
      JSON.stringify({ is_disabled: !e.target.checked }),
      "application/json"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          throw data.message;
        }
        fireAlert("تم تعديل حالة العنصر", "success");
      })
      .catch((error) => fireAlert(error.toString(), "error"));
  };
  return (
    <Switch
      size="small"
      checked={checked}
      onChange={handleChange}
      color="secondary"
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default StatusToggler;
