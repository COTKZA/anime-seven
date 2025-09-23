import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { AuthContextType, AuthState, LoginCredentials } from '../types/interface';
import axios from 'axios';

const AuthContext = createContext<AuthContextType | null>(null);

const API_URL = `${import.meta.env.VITE_API_URL}`;

interface Props {
    children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    const [state, setState] = useState<AuthState>({
        isAuthenticated: false,
        user: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        setState(prev => ({ ...prev, loading: true }));
        try {
            const response = await axios.get(`${API_URL}/auth/profile`, {
                withCredentials: true,
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
            });

            if (response.data?.user) {
                setState({
                    isAuthenticated: true,
                    user: response.data.user,
                    loading: false,
                    error: null
                });
                return true;
            }
        } catch (error: any) {
            setState({
                isAuthenticated: false,
                user: null,
                loading: false,
                error: null,
            });
        }
        return false;
    };

    const login = async (credentials: LoginCredentials) => {
        setState(prev => ({ ...prev, loading: true }));
        try {
            await axios.post(
                `${API_URL}/auth/login`,
                credentials,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            )
            await checkAuth();
        } catch (error: any) {
            setState(prev => ({
                ...prev,
                error: error.response?.data?.error || 'Login failed',
                loading: false
            }));
            throw error;
        }
    };

    const logout = async () => {
        try {
            await axios.post(
                `${API_URL}/auth/logout`,
                {},
                { withCredentials: true }
            );

            setState({
                isAuthenticated: false,
                user: null,
                loading: false,
                error: null
            });
        } catch (error) {
            setState(prev => ({
                ...prev,
                error: 'Logout failed'
            }));
        }
    };
    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout,
                checkAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider