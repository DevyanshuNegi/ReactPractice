// this returns so jsx
// thsi is the provider

import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
//   const [user, setUser] = React.useState({
//     username: "John Doe",
//     password: "123456",
//   });

const [user, setUser] = React.useState(null);

//   just the syntax
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
