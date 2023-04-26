import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContex } from '../provider/AuthProvider';

const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(authContex);
    if (loading) {
        return (
          <>
            <progress className="progress w-56"></progress>
          </>
        );
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivetRout;