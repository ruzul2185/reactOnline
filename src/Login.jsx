import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const handlerUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }


    return(<div>
        {/* Login starting */}
      <div>
        <input type='text' name="username" value={username} onChange={handlerUsername}/>
        <span>{username}</span>
      </div>
      <div>
        <input type='password' name="password" value={password} onChange={handlePassword}/>
        <span>{password}</span>
      </div>
      {/* Login end */}

      <div>Don't have an account? <span style={{color:"blue", cursor:"pointer"}} onClick={()=>{navigate("/count")}}>Sign Up Now!</span></div>
    </div>)
}

export default Login;