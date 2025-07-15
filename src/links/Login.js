import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add real login logic here
    console.log('Logging in with', email, password);
  };

  return (
    <div className='login-wrapper'>
      <div className='login-card'>
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin} className='login-form'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='you@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='••••••••'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type='submit'>Log In</button>
        </form>
        <p className='login-footer'>
          Don’t have an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
