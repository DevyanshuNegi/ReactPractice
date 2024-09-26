import React from "react";

// there is no data when you intialize the context
// we need a centeral men which will hold the data and provide it to the children
const UserContext = React.createContext();

export default UserContext;