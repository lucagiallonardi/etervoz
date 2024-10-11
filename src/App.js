import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './pages/Services/Services';
import Voices from './pages/Voices/Voices';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/voices' element={<Voices/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
