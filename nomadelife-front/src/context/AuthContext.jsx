import { useContext, createContext } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children, value }) {
    return <AuthContext.Provider value = {value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthValue() {
    return useContext(AuthContext);
}