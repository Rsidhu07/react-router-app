import css from './App.module.css';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './containers/Home/Home';
import DashBoard from './containers/DashBoard/DashBoard';
import ProtectedRoute from './containers/ProtectedRoute/ProtectedRoute';

const userAllowed = {
    email: 'task@gmail.com', 
    password: '12345678'
}

const parsedKeyDataInLS = (key='') => {
    return (JSON.parse(localStorage.getItem(key))) || '';
};

const IS_USER_LOGGED_IN = 'isUserLoggedIn';
const USER_DATA = 'userData';

const App = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(parsedKeyDataInLS(IS_USER_LOGGED_IN));
    const [userData, setUserData] = useState(parsedKeyDataInLS(USER_DATA));

    useEffect(() => {
        setIsUserLoggedIn(parsedKeyDataInLS(IS_USER_LOGGED_IN));
        setUserData();
    }, [isUserLoggedIn]);

    return (
        <div className={css.App}>
            <section className={css.glass}>
                <Nav isUserLoggedIn={isUserLoggedIn} userData={userData} setIsUserLoggedIn={setIsUserLoggedIn}/>
                <Route path='/' exact>
                    <Home isUserLoggedIn={isUserLoggedIn} userData={userData} setIsUserLoggedIn={setIsUserLoggedIn} />
                </Route>
                <Route path='/dash-board' exact>
                    <DashBoard isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn}/>
                </Route>
                <Route path='/protected-route' exact>
                    <ProtectedRoute isUserLoggedIn={isUserLoggedIn} userData={userData} userAllowed={userAllowed}/>
                </Route>
            </section>
            <div className={css.circle1}></div>
            <div className={css.circle2}></div>
        </div>
    );
}

export default App;

