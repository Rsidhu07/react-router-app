import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ProtectedRoute = ({ userData, userAllowed, history, isUserLoggedIn }) => {
  useEffect(() => {
    if (!(userData.email === userAllowed.email) || !(userData.password === userAllowed.password)) {
      if (isUserLoggedIn) {

        history.push('/dash-board');
      } else {
        history.push('/');
      }
    }
  }, []);

  return (
    <div>
      <h1>ProtectedRoute</h1>
    </div>
  )
}

export default withRouter(ProtectedRoute);