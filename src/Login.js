import React, { useState } from 'react'
import "./Login.css"
import linkedInIcon from './assets/linkedin.png'
import linkedInLogo from './assets/LinkedIn-logo.png'
import { auth } from './firebase'
import userEvent from '@testing-library/user-event'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
 



function Login() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch()
    
    const loginToApp = (e) => {
      e.preventDefault();

      auth.signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        }))
      }).catch((error) => alert(error));
    }
    
    const register = () => {
      if (!name)
        return alert('Please Enter a Full name');

      auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoUrl: profilePic,
        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
          }))
        })
        
      }).catch(error => alert(error))
    };
    
  return (
    <div className='login'>
        <img src={linkedInLogo} alt="linkedIn logo" />

        <form>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)"/>
            <input type="text" value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile Pic URL (optional)"/>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
            <button onClick={loginToApp}>Sign In</button>
            <p>Not a member? <span className='login-register' onClick={register}>Register Now</span></p>
        </form>

    </div>


  )
}

export default Login
