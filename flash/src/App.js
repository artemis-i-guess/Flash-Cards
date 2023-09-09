import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Add from './Components/Add/Add';
import {Route, Routes} from "react-router-dom";
import Carousel from './Components/Carousel/Carousel';

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
        <Route path='/' element={<Body/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/revise' element={<Carousel/>}/>
        </Routes>
    </div>
   
  );
}

export default App;
