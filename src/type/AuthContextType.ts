import { TypeUser } from "./typeUser";

type AuthContextType = {
  user: TypeUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export type { AuthContextType };