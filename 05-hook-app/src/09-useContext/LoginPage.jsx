import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import { Navbar } from "./Navbar"


export const LoginPage = () => {

  const {user, setUser} = useContext( UserContext );

  return (
    <>
        LoginPage
        <hr/>

        <Navbar />
        <pre>
        {
          JSON.stringify(user, null, 3)
        }
        </pre>

        <button className="btn btn-primary" onClick={ () => setUser({id: 123, name: 'jaun'})}>
          Establecer usuario
        </button>
    </>
  )
}
