import './App.css'
import { React } from 'react';
import Login from './components/login/Login';
import useToken from './saveToken';
import Home from './components/home/Home';


function App() {
  const { token, setToken } = useToken('')
  if(!token)
  {
    console.log("No Token")
    return (
      <div>
          <Login setToken={setToken} />
      </div>
    );
  }
  else
  {
    console.log("Yes Token")
    return (
      <div>
          <Home setToken={setToken}/>
      </div>
    );
  }
}
export default App;