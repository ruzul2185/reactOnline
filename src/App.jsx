import Home from './Home';

import { useState } from 'react';


// This is an arrow function component that returns a simple JSX element.
const App = () => {

  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [password,setPassword] = useState("");

  // data fetch from backend
  const message = "Properties are passed to home";
  const head = "header";
  const foot = "footer";

  const print = (msg) => {
    console.log(msg);
  }

  const handlerUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      <Home print={print} data={message} />
      <button onClick={() => {setCount(count+1)}}>
        Count is {count}
      </button>
      <div>
        <input type='text' name="username" value={username} onChange={handlerUsername}/>
        <span>{username}</span>
      </div>
      <div>
        <input type='password' name="password" value={password} onChange={handlePassword}/>
        <span>{password}</span>
      </div>
    </div>
  )
}

export default App;
