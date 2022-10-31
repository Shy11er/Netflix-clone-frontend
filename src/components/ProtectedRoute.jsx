import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContex';

const ProtectedRoute = ({children}) => {
  const {user} = UserAuth();

  if (!user) return <Navigate to='/' />
  else return children
}

export default ProtectedRoute