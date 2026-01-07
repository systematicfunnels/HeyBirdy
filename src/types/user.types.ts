export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
  avatar?: string;
  points?: number;
  badges?: string[];
}

export interface LoginCredentials {
  email: string;
  password?: string;
  provider?: string;
}

export interface AuthResponse {
  user: User;
  access_token: string;
}
