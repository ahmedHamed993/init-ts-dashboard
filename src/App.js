// global styles
import './styles/global.css';
// react router
import { RouterProvider } from 'react-router-dom';
// routers
import router from './routes/router';
// providers 
import Providers from './components/providers/Providers';

function App() {
    return (
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    );
}

export default App;
