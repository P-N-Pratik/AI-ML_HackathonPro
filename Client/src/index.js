import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import MainPage from './MainPage'
import Home from './components/navbarComponents/home/Home'
import AboutUs from './components/navbarComponents/aboutUs/AboutUs'
import Features from './components/navbarComponents/features/Features';
import SignIn from './components/Authentication/SignIn/SignIn'

// import { UserProvider } from './contexts/userContext.js';
import { UsersInfoProvider } from './contexts/usersInfoContext';

// const router = createBrowserRouter(
//   createRoutesFromElements(

//   <Route path='/' element={<MainPage />}>


//     <Route path='' element={<Home />} />
//     <Route path='aboutUs' element={<AboutUs />} />
//     <Route path='features' element={<Features />} />
//     <Route path='signin' element={<SignIn />} />


//   </Route>

//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  // <UserProvider>
    <UsersInfoProvider>
      <Auth0Provider
          domain="dev-lhh2s24sw2nyrvxq.us.auth0.com"
          clientId="FRaUjE97nAyJf9xn5LfzhHHnkfz7He2k"
          authorizationParams={{
            redirect_uri: `${window.location.origin}/dashboard`
          }}>

      {/* <RouterProvider router={router} /> */}
        <MainPage />
        

      </Auth0Provider>
    </UsersInfoProvider>
 // </UserProvider> 
  

);


