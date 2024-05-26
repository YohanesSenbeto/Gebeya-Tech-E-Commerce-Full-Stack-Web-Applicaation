import React, { useState, useEffect, useContext, ReactNode } from "react";
import getAuth from '../util/auth';

type AuthContextType = {
  isLogged: boolean;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, user };

  useEffect(() => {
    const loggedInuser = getAuth();
    loggedInuser.then((response: User) => {
      if (response.user_token) {
        setIsLogged(true);
        if (response.user_role === '3') {
          setIsAdmin(true);
        }
        setUser(response);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};