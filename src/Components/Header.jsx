import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContex } from '../provider/AuthProvider';

const Header = () => {

    // sign out function here and check authprovider 
    const { user, logOut } = useContext(authContex);
    const handleLogout = ()=>{
        logOut()
            .then(() => { }).catch(error => {
            console.error(error)
        })
    }

    return (
      <div>
        <div className="navbar bg-neutral text-neutral-content">
          <a className="btn btn-ghost normal-case text-xl">McDrupm</a>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/orders">
            Orders
          </Link>
          { user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </Link>}
          <Link className="btn btn-ghost normal-case text-xl" to="/register">
            Register
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
          <div>
            {user ? (
              <>
                <span>{user.email}</span>
                <button onClick={handleLogout} className="btn ">Logout</button>
              </>
            ) : (
              <>
                {" "}
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;