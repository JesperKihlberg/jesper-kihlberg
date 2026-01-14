import * as React from 'react'
import {ReactNode, useCallback, useContext, useEffect, useState} from 'react'

// Cookie utilities
const ACCESS_TOKEN_KEY = 'access_token';

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
  return null;
};

const setCookie = (name: string, value: string, days = 7) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

export interface AuthContext {
  isAuthenticated: boolean
  login: (username: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = React.createContext<AuthContext | null>(null)

type Props = {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const logout = useCallback(async () => {
    setIsAuthenticated(false);
    deleteCookie(ACCESS_TOKEN_KEY);
  }, [])

  const login = useCallback(async (accessToken: string) => {
    setCookie(ACCESS_TOKEN_KEY, accessToken);
    setIsAuthenticated(!!accessToken);
  }, [])

  useEffect(() => {
    const accessToken = getCookie(ACCESS_TOKEN_KEY);
    setIsAuthenticated(!!accessToken);
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
