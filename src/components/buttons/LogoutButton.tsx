import React, { useState } from "react";
// r router
import { useNavigate } from "react-router";
// r redux
import { useSelector, useDispatch } from "react-redux";
// mui
import {
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
// components
import ConfirmationAlert from "../alerts/ConfirmationAlert";
import DialogWrapper from "../dialog/DialogWrapper";
// fetch
import fetching from "../../helpers/fetching/fetching";
// alerts
import fireAlert from "../../helpers/alerts/fireAlert";
// icons
import { IoIosLogOut } from "react-icons/io";
// redux action
import { removeUserToken } from "../../redux/features/user/userSlice";

// types
import { UserState } from "../../types/types";

type Props = {};

const LogoutButton = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userToken = useSelector(
    (state: UserState) => state.user.userToken
  );
  const [open, setOpen] = useState(false);
  const logoutUser = async () => {
    setOpen(false);
    fetching(`/logout`, userToken, "POST")
      .then((res) => res.json())
      .then((data) => {
        dispatch(removeUserToken());
        fireAlert("تم تسجيل الخروج بنجاح", "success");
        navigate("/login");
      })
      .catch((error) => {
        dispatch(removeUserToken());
        fireAlert("تم تسجيل الخروج بنجاح", "success");
        navigate("/login");
      });
  };
  return (
    <>
      <ListItem disablePadding sx={{ color: "white" }}>
        <ListItemButton component={Button} onClick={() => setOpen(true)}>
          <ListItemIcon
            sx={{ fontSize: "22px", minWidth: "32px", color: "inherit" }}
          >
            <IoIosLogOut />
          </ListItemIcon>
          <ListItemText primary={"تسجيل الخروج"} />
        </ListItemButton>
      </ListItem>
      <ConfirmationAlert
        open={open}
        setOpen={setOpen}
        title={"تسجيل خروج"}
        DialogActionNodes={
          <>
            <Button onClick={logoutUser} variant="contained">
              تسجيل الخروج
            </Button>
            <Button onClick={() => setOpen(false)}>الغاء</Button>
          </>
        }
      >
        <Typography variant="body2">
          هل انت متاكد انك تريد تسجيل الخروج
        </Typography>
      </ConfirmationAlert>
    </>
  );
};

export default LogoutButton;
