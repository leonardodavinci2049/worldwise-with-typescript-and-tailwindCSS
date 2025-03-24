import { ReactNode, useReducer } from "react";
import { AuthContext } from "./FakeAuthContext";
import { initialState } from "../cities/initialStateCity";

type State = {
  user: {
    name: string;
    email: string;
    password: string;
    avatar: string;
  } | null;
  isAuthenticated: boolean;
};
type Action =
  | {
      type: "login";
      payload: {
        name: string;
        email: string;
        password: string;
        avatar: string;
      };
    }
  | { type: "logout" };

function reducerOperation(state: State, action: Action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "@@@2025$$$",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }: { children: ReactNode }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducerOperation,
    initialState
  );

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
