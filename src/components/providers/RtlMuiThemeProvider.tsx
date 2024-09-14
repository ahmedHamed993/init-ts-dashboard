import { ReactNode } from "react";
// for rtl support
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const cacheLtr = createCache({
  key: "muiltr",
  stylisPlugins: [prefixer],
});

function RtlMuiThemeProvider({ children }: { children: ReactNode }) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
export default RtlMuiThemeProvider;

export function TogglerThemeForFormRegistration({
  lang,
  children,
}: {
  lang: string;
  children: ReactNode;
}) {
  return (
    <CacheProvider value={lang === "ar" ? cacheRtl : cacheLtr}>
      {children}
    </CacheProvider>
  );
}
