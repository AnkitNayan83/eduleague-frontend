import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AboutUs from "./pages/aboutUs/AboutUs";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
