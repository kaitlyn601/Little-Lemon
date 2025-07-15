import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // Add your sign-up logic here (API call, etc)
    console.log({ name, email, password });
  };

  return (
    <div className='login-wrapper'>
      <div className='login-card'>
        <h2>Create an Account</h2>
        <form onSubmit={handleSignUp} className='login-form'>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            id='name'
            placeholder='Your full name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <label htmlFor='confirm-password'>Confirm Password</label>
          <input
            type='password'
            id='confirm-password'
            placeholder='••••••••'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: 'red', marginTop: 0 }}>{error}</p>}

          <button type='submit'>Sign Up</button>
        </form>

        <p className='login-footer'>
          Already have an account? <a href='/login'>Log In</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
