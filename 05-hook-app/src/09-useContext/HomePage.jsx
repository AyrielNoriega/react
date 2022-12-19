import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { Navbar } from "./Navbar"


export const HomePage = () => {

  const {user, setUser} = useContext( UserContext );

  return (
    <div>
        HomePage
        <hr/>
        <Navbar />
        <pre>
        {
          JSON.stringify(user, null, 3)
        }
        </pre>
    </div>
  )
}
