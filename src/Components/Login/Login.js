import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../Store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory,Link } from 'react-router-dom';

function Login() {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const [error,setError] = useState('')
  const {firebase} = useContext(FirebaseContext) 
  const history = useHistory()

  const handleSubmit = (e)=>{
    e.preventDefault() 
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
       history.push('/')
    }).catch((err)=>{
      if(err.message == 
        "{\"error\":{\"code\":400,\"message\":\"INVALID_LOGIN_CREDENTIALS\",\"errors\":[{\"message\":\"INVALID_LOGIN_CREDENTIALS\",\"domain\":\"global\",\"reason\":\"invalid\"}]}}"){
          setError('Invalid Email or Password')
        }else{
          setError(err.message)
        }
      
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>
        <a>Signup</a>
        </Link>
        
      </div>
    </div>
  );
}

export default Login;
