import React from 'react';
import css from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const Nav = ({ history, isUserLoggedIn, userData = {}, setIsUserLoggedIn }) => {

    const userLogOutHandler = ()=>{
        setIsUserLoggedIn(false);
        localStorage.clear();
        history.push('/');
    };

    const userLoggedIn = (
        <li><h3>Hi there {userData?.name}</h3><button onClick={userLogOutHandler}> Logout </button></li>
    );

    const userLoggedOut = (
        <>
        <li><NavLink to='/'> Home </NavLink></li>
        <li><NavLink to='/'> Login </NavLink></li>
        </>
    );


    return (
        <div className={css.Nav}>
            <ul className={css['navigation-ul']}>
               {isUserLoggedIn ? userLoggedIn : userLoggedOut }
            </ul>
        </div>
    );
};

export default withRouter(Nav);
