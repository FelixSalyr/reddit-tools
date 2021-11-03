import React, { useState } from "react";

const AuthContext = React.createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({user, children}) => {
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </Provider>
  );
};

// a simple custom hook to consume our context in the child components.
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, AuthContext, useAuth };
