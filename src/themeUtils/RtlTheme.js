import { createTheme } from '@mui/material/styles';
// palette for light mode
import { lightPalette } from './lightPalette';
// rtl plugin
import { prefixer } from 'stylis'; // prefix of  css styles
import rtlPlugin from 'stylis-plugin-rtl'; // to apply rtl on the mui component
// for caching rlt
import createCache from '@emotion/cache';

// mui theme
export const RtlTheme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: `"Cairo", "Helvetica", "Arial", sans-serif`,
    },
    palette: { ...lightPalette },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                    },
                },
            },
        },
    },
});

// Create rtl cache
export const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
