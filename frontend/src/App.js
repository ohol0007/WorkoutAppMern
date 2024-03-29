import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages & components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import NavBar from './components/Navbar';

//function
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <div className='pages'>
          <Routes>
            <Route
            path ="/"
            element={<Home/>}
            />
            <Route
            path ="/login"
            element={<Login/>}
            />
            <Route
            path ="/signup"
            element={<Signup/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
