import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { appContext } from "../App";
import { useContext,useState,useRef} from "react";
export default function Login() {
  const { users, user, setUser } = useContext(appContext);
  const [msg, setMsg] = useState();
  const Navigate = useNavigate()
    const msgRef = useRef();
  const handleSubmit = ()=>{
    const found = users.find((value) => value.email === user.email && value.password === user.password);
    if (found) {
      user.name=found.name;
      setMsg();
      Navigate("/")
    } else {
      setMsg("User doesnot exists");
      msgRef.current.style.color = "red";
    }
  }
  return (
    <div>
      <h3>Login Form</h3>
      <p ref={msgRef}>{msg}</p>
      <p><input type="email"  placeholder='Email address'  onChange={(e) => setUser({ ...user, email: e.target.value })}></input></p>
      <p><input type="password" placeholder='Password'  onChange={(e) => setUser({ ...user, password: e.target.value })}></input></p>
      <p><button onClick={handleSubmit}>Log In</button></p>
      <p><Link to="../register">Create Account</Link></p>
    </div>
  )
}