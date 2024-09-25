import { enqueueSnackbar } from "notistack";

const fireAlert = (
  msg: string,
  variant?: "success" | "default" | "error" | "warning" | "info" | undefined,
  vertical?: "top" | "bottom",
  horizontal?: "left" | "center" | "right"
) => {
  enqueueSnackbar(msg, {
    variant: variant ?? "success",
    anchorOrigin: {
      vertical: vertical ?? "top",
      horizontal: horizontal ?? "center",
    },
  });
};
export default fireAlert;
