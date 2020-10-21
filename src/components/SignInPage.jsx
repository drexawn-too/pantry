import React from 'react';
import { signInWithGoogle } from '../firebase';

import '../App.css';

const SignInPage = () => (
  <div>
    <button type="submit" onClick={signInWithGoogle}>Sign In</button>
  </div>
);

export default SignInPage;
