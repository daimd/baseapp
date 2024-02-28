
import { CssBaseline,} from '@mui/material';
import AppHeader from '../common/AppHeaderComponent';
import LoginButton from '../common/LoginButton';
import { AuthProvider } from '../../context/AuthContext';

const AppLayout = ({ children }) => {
    return (
        <>  
            {/* Check authentication status (e.g., check if user is logged in) 
                Render common layout components such as header, footer, etc.
            */}
            
            <CssBaseline />
            
            <AppHeader />

            <LoginButton />

            {children} {/* Render child components */}
            
        </>
    );
};

export default AppLayout;
