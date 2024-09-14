import { ReactNode } from "react";
// mui
import RtlMuiThemeProvider from "./RtlMuiThemeProvider";
import { ThemeProvider } from "@emotion/react";
import { MuiTheme } from "../../theme/MuiTheme";
// toast alert
import { SnackbarProvider } from "notistack";
// redux
import { Provider } from "react-redux";
import { store } from "../../redux/store";


type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    // {/* // rtl mui theme chaching and support  */}
    <Provider store={store}>
      <RtlMuiThemeProvider>
        {/* mui theme customization */}
        <ThemeProvider theme={MuiTheme}>
          {/* redux provider  */}
            {children}
            {/* toast alert  */}
            <SnackbarProvider />
        </ThemeProvider>
      </RtlMuiThemeProvider>
    </Provider>
  );
};

export default Providers;
