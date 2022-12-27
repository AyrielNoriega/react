import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"


export const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('login', {
      replace: true
    })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="/marvel"
              >
                Marvel
              </NavLink>
              <NavLink
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="/dc"
              >
                DC
              </NavLink>
              <NavLink
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="search"
              >
                Search
              </NavLink>
              <NavLink
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="hero"
              >
                Hero
              </NavLink>
              {/* <NavLink
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="/login"
              >
                Login
              </NavLink> */}
            </ul>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent2">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <NavLink
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="/dc"
              >
                Ayriel
              </NavLink>
              <NavLink
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="/login"
                onClick={ onLogout }
              >
                Logout
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
