"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5050/api/auth/me");
        setUser(res.data.user);
      } catch (err) {
        console.warn("Auth backend not reachable, using fallback.");
        setUser(null); // fallback to no user
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
