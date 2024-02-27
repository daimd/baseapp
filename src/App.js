// src/App.js

import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import appRoutes from './routes/appRoutes';
import { useEffect } from 'react';
import Modal from 'react-modal'; //When using react-modal, it requires you to set the appElement to ensure that screen readers don't see main content when the modal is opened.


const App = () => {
    // To resolve this warning, you can set the appElement using the Modal.setAppElement method provided by react-modal. 
    // Typically, you would set it to a DOM element that represents the main content of your application.
    Modal.setAppElement('#root'); // Set the app element to the root div
    useEffect(() => {
        Modal.setAppElement('#root');
      }, []); // Ensure that it runs only once on component mount
    
  return (
    
    <Router>
            <AuthProvider>
                <Routes>
                    {appRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element}>
                            {route.children && route.children.map((childRoute, childIndex) => (
                                <Route key={childIndex} path={childRoute.path} element={childRoute.element} />
                            ))}
                        </Route>
                    ))}
                </Routes>
            </AuthProvider>
        </Router>
  );
};

export default App;



