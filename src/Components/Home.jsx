import React from 'react';
import { useContext } from 'react';
import { authContex } from '../provider/AuthProvider';

const Home = () => {
    const { user } = useContext(authContex)
    console.log(user)
    
    return (
        <div>
            <h1>this is home {user && <span>{user.displayName}</span> }</h1>
        </div>
    );
};

export default Home;