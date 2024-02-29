// ProtectedRoute.js
import { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
    console.log('Rendering ProtectedRoute for path:', rest.path); // Log the path of the ProtectedRoute

    const { user} = useContext(AuthContext);


    if(!user){
        // redirect to login if user is not  authenticated
        return   <Navigate to="login"></Navigate>;
    }
    if (roles && roles.length>0 && !roles.includes(user.role)) {
  
         // Redirect to unauthorized page if user's role does not match required roles
        return <Navigate to="/unauthorized" />;
        
    }
    return (
        <Route {...rest} element={<Component/>}></Route>
        // <Route {...rest} render={(props) => isAuthenticated ? (<Component {...props} />) : (<Navigate to="/login" />)}/>
    );
};

export default ProtectedRoute;
