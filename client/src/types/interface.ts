export interface categorys {
    id: number;
    name: string;
}

export interface tags {
    id: number;
    name: string;
}

export interface dashboardStatus {
    user: number;
    category: number;
    tags: number;
    story: number;
    episodes: number;
}

export interface User {
    id: number;
    username: string;
    email: string;
    role: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
}

export interface LoginCredentials {
    email: string;
    password_hash: string;
}


export interface AuthContextType extends AuthState {
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<boolean>;
}