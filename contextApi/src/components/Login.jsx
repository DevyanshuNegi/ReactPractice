import React from 'react'
import { useState , useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // this is to set data to the context
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        // Prevent the page from refreshing

        e.preventDefault();
        setUser({username, password});

    }
  return (
    <div>
        
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder='username'

      />
      {"   "}
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder='password'
      />
      {"   "}
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default Login