import './App.css';
import { Navbar } from "./componets/Navbar";
import { NewsList } from "./componets/NewsList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Register } from './componets/Register';
import { Login } from './componets/Login';
import axios from "axios";
import { Preference } from './componets/Preference';

axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';
axios.defaults.withCredentials=true;

axios.interceptors.request.use(function(config){
 const token= localStorage.getItem('auth_token');
 config.headers.Authorization= token?`Bearer ${token}`:'';
 return config;
});


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/" element= {<NewsList/>}/>
          <Route path="/preference" element= {<Preference/>}/>
          <Route exact path="/signup" element={<Register/>}/>
          
          <Route exact path="/login" element={<Login />}/>
            
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
