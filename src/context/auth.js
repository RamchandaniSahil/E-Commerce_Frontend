import { createContext, useContext } from "react";

export const UserAuth = createContext({
  details: null,
  auth: null,
  setDetails: () => {},
});

export const UserAuthProvider = UserAuth.Provider;

export default function useUserAuth() {
  return useContext(UserAuth);
}
