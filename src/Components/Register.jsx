import React from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { authContex } from '../provider/AuthProvider';
import { useContext } from 'react';

const auth = getAuth(app);
const Register = () => {
    const [error, setError] = useState("");
    const {user, createUser} =useContext(authContex)
    
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
          .then((result) => {
            const loggedUser = result.user;
              console.log(loggedUser);
              form.reset()
          })
          .catch((error) => {
            setError(error.message);
          });
    }

    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col e">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi.
              </p>
            </div>
            <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                  <button className="btn btn-primary">Register</button>
                </div>
              </div>
               </form>
                <p className='text-error'>{error}</p>
            <label className="label">
              <p>
                If you have already Account
                <span>
                 
                  <Link to="/login" className="btn btn-link">
                    login
                  </Link>
                </span>
              </p>
            </label>
          </div>
        </div>
      </div>
    );
};

export default Register;