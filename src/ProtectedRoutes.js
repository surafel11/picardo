import React from 'react';
import { Navigate, Outlet } from 'react-router';
import Cookies from 'js-cookie';

import Utils from './shared/utils';

export const ProtectedRoutes = () => {

    const utils = new Utils();

    const readCookie = () => {
        const token = utils.getStoredToken();
        if(token !== null){
            return true;
        }
        return false;
    }
    
  return readCookie() ? <Outlet/> : <Navigate to="/auth"/>;
};