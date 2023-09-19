import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { Outlet,useNavigate } from 'react-router-dom';
import Login from '../components/login';




const auth = () => {
    const userLogin = localStorage.getItem('userLogin');
    return userLogin ? JSON.parse(userLogin) : null;
    

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
    const session = useSession();
   
return isAuthorized ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;

