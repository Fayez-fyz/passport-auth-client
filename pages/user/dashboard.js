import React, { useContext } from "react";
import UserRoute from "../../components/routes/UserRoute";
import { UserContext } from "../../context";

const dashboard = () => {
  const [state, setState] = useContext(UserContext);
  return (
    <UserRoute>
   
        <div>
          <h1>User Dashboard</h1>
          <p>Your role is {state.role}</p>
          <p>Your email is {state.email}</p>
          <p>Your name is {state.name}</p>
        </div>
 
    </UserRoute>
  );
};

export default dashboard;
