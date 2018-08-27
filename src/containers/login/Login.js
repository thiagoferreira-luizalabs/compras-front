import React from 'react';

const Login = ({ setAuth }) => {
  return (
    <p>
      Welcome. Insert your credentials to log in.
    <button onClick={setAuth}>
        Click here to log in
    </button>
    </p>
  )
}

export default Login
