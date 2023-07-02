import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AboutUs from "./pages/aboutUs/AboutUs";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

//rafc

export default App;
