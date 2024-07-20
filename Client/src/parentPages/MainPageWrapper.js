
import {Navigate,useLocation } from 'react-router-dom'
import { useContext } from "react";
import {UserContext} from "../contexts/userContext"
import UserLoggedIn from './UserLoggedIn';
import UserEnters from './UserEnters';
import Authentication from '../components/Authentication/Authentication';


const MainPageWrapper = ()=>{
    const {user,isSignedIn,setUser,setIsSignedIn} = useContext(UserContext);

    if (user && isSignedIn){
        // return <Navigate to="/userloggedin" />;
        return <UserLoggedIn />
    }
    else if(user && !isSignedIn)
    {
        return <Authentication />
    }
    else{
        // return <Navigate to="/userenters" />;
        return <UserEnters/>
    }

    
}

export default MainPageWrapper;

