import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContex } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');

    const { signIn, googleSignIn } = useContext(authContex);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset ()
            }).catch(error => {
            setError(error.message)
        })
    }

    // google login check authprovider also and line 10  
    const googleLogin = () => {
        googleSignIn()
            .then(result => {
            const looginUser =result.user
        }).catch(
            error => {
                setError(error)
            }
        )
    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col e">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi.
              </p>
            </div>
            <form
              onSubmit={handleLogin}
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="Email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div>
                  <button onClick={googleLogin} className="btn btn-primary w-full">
                    Sign In Google
                  </button>
                </div>
              </div>
            </form>
            <p className="text-error">{error}</p>
            <label className="label">
              <p>
                If you New In Website
                <span>
                  <Link to="/register" className="btn btn-link">
                    Register
                  </Link>
                </span>
              </p>
            </label>
          </div>
        </div>
      </div>
    );
};

export default Login;