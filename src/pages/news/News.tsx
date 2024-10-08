import React, { useState } from "react";
// alerts
import DialogWrapper from "../../components/dialog/DialogWrapper";
import ConfirmationAlert from "../../components/alerts/ConfirmationAlert";
const News = () => {
  const [open, setOpen] = useState(false);
  const logoutUser = () => {
    console.log("done");
    setOpen(false);
  };
  return <div>a</div>;
};

export default News;
