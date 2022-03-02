import React, { useContext } from 'react'
import AdminRoute from '../../components/routes/AdminRoute';
import { UserContext } from '../../context';

const dashboard = () => {
    const [state, setState] = useContext(UserContext);
    return (
      <AdminRoute>
          <div>
            <h1>Admin Dashboard</h1>
            <p>Your role is {state.role}</p>
            <p>Your email is {state.email}</p>
            <p>Your name is {state.name}</p>
          </div>
      </AdminRoute>
    );
}

export default dashboard