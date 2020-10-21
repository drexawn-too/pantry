import React from 'react';
import { signInWithGoogle } from '../firebase';

const SignInPage = () => (
  <div>
    <button type="submit" onClick={signInWithGoogle}>Sign In</button>
  </div>
);

export default SignInPage;
