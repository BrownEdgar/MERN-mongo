
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ user }) {
  const logout = () => {
    window.open("http://localhost:3000/auth/logout", "_self");
  };
  return (
    <header>
      <div className="logo">
        <Link to='/'>Logo</Link>
      </div>

      {user ? (
        <nav>
          <ul>

            <li className="listItem">
              <img
                src={user?.photos[0].value}
                alt="avatar"
                className="avatar"
              />
              {user?.displayName}
            </li>
            <li onClick={logout}>
              Logout
            </li>
            <li>
              <Link to='/login'>login</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/cars'>Cars</Link>
            </li>
            <li>
              <Link to='/addCars'>Add Cars</Link>
            </li>
          </ul>

        </nav>
      ) : (

        <Link className="link" to="login">
          Login
        </Link>
      )}
    </header>
  )
}
