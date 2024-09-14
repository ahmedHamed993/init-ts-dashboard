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
// react-query
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

type Props = {
  children: ReactNode;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retry: false,
      cacheTime: 0,
    },
  },
});
const Providers = ({ children }: Props) => {
  return (
    // {/* // rtl mui theme chaching and support  */}
    <Provider store={store}>
      <RtlMuiThemeProvider>
        {/* mui theme customization */}
        <ThemeProvider theme={MuiTheme}>
          {/* redux provider  */}
          {/* react-query */}
          <QueryClientProvider client={queryClient}>
            {children}
            {/* toast alert  */}
            <SnackbarProvider />
          </QueryClientProvider>
        </ThemeProvider>
      </RtlMuiThemeProvider>
    </Provider>
  );
};

export default Providers;
