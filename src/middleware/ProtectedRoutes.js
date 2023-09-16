import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { Outlet,useNavigate } from 'react-router-dom';
import Login from '../components/login';



const auth = () => {
    return JSON.parse(localStorage.getItem('userLogin'));
}

export const useSession = () => {
    const session=auth();
    const decodedSession = session ? jwtDecode(session) : null;

    const navigate = useNavigate();

    useEffect(() => {
        if(!session){
            navigate('/',{replace:true});
}
    }, [session,navigate]);

    return decodedSession;
}

const ProtectedRoutes = () => {
    const isAuthorized = auth();
   
return isAuthorized ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;

