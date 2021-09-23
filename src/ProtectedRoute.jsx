import React, { useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)  
  useEffect(() => {
    let token = localStorage.getItem('token')
        if(token){
            let tokenExpiration = jwtDecode(token).exp;
            let dateNow = new Date();
            console.log(tokenExpiration); 
            console.log(dateNow); 
            if(tokenExpiration < dateNow.getTime()/1000){
                setIsAuthenticated(false)
            }else{
                setIsAuthenticated(true)
            }
        } else {
           setIsAuthenticated(false)
        }
  }, [isAuthenticated])

  if(isAuthenticated === null){
    return <></>
  }

  return (
    <Route {...rest} render={props =>
      !isAuthenticated ? (
        <Redirect to='/welcome'/>
      ) : (
        <Component {...props} />
      )
    }
    />
  );
};

export default ProtectedRoute;