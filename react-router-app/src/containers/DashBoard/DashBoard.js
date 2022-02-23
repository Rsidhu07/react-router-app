import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const DashBoard = ({ isUserLoggedIn, history}) => {

  useEffect(() => {
    if (!isUserLoggedIn) history.push('/');
    }, []);

  return (
    <div>
      <h1>DashBoard</h1>
    </div>
  )
};

export default withRouter(DashBoard);