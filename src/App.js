import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AboutUs from "./pages/aboutUs/AboutUs";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { Wallet } from "./pages/wallet/Wallet";
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/editProfile' element={<Profile />} />
        <Route path='/wallet' element={<Wallet />} />
      </Routes>
    </div>
  );
}

//rafc

export default App;
