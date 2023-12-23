// global styles
import './styles/global.css';
// react router
import { RouterProvider } from 'react-router-dom';
// proviers
import { CacheProvider, ThemeProvider } from '@emotion/react';
// routers
import router from './routes/router';
// them utils
import { RtlTheme, cacheRtl } from './themeUtils/RtlTheme';

function App() {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={RtlTheme}>
                {/*TODO :  redux provier  */}
                <RouterProvider router={router} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
