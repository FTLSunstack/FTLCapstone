import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// React Context object - allows for the sharing of data across all components
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // empty obj will hold the user info ofc
  const [user, setUser] = useState(null);

  // need to check if it is authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/me`, {
          withCredentials: true,
        });
        // get the user info
        setUser(res.data.user);
      } catch (err) {
        // not logged in
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  //this needs to be here because it is directly changing the authentication status of the user aka logged in logged out
  const logout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
      setUser(false);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    // makes sure that these things can be accessed anywhere in the program
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// this makes it easy to call
export const useAuth = () => useContext(AuthContext);
