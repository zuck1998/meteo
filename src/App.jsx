import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screen/home/Home';


function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Home/>
      
    </div>
  );
}

export default App;
