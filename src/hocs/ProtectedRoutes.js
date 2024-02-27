// ProtectedRoute.js
import { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
    const { isAuthenticatedUser } = useContext(AuthContext);

    if(!isAuthenticatedUser){
        // redirect to login if user is not  authenticated
        return   <Navigate to="login"></Navigate>;
    }
    if (roles && roles.length>0 && !roles.includes(isAuthenticatedUser.role)) {
         // Redirect to unauthorized page if user's role does not match required roles
        return <Navigate to="/unauthorized" />;
        
    }
    return (
        <Route {...rest} element={<Component/>}></Route>
        // <Route {...rest} render={(props) => isAuthenticated ? (<Component {...props} />) : (<Navigate to="/login" />)}/>
    );
};

export default ProtectedRoute;
