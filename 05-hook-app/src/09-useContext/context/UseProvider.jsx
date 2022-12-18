import { UserContext } from "./UserContext"

export const UseProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'mundo' }}>
        { children }
    </UserContext.Provider>
  )
}
