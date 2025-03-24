import { AuthContextType } from "../../type/AuthContextType";

const initialContext: AuthContextType = {
  user: {
    name: "",
    email: "",
    password: "",
    avatar: "",
  },
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

export { initialContext };