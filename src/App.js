import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AboutUs from "./pages/aboutUs/AboutUs";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { Wallet } from "./pages/wallet/Wallet";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { PublicRoute } from "./components/routes/PublicRoute";
import "react-toastify/dist/ReactToastify.css";
import { NoUserRoute } from "./components/routes/NoUserRoute";
import { PrivateRoute } from "./components/routes/PrivateRoute";
import { CreateQuiz } from "./pages/createQuiz/CreateQuiz";
import { JoinQuiz } from "./pages/joinQuiz/JoinQuiz";
import { Questions } from "./pages/questions/Questions";
import { Leaderboard } from "./pages/leaderboard/Leaderboard";
import { JoinQuizCard } from "./pages/joinQuizCard/JoinQuizCard";
import { OneV } from "./pages/oneVone/OneV";
import { PrivacyPolicy } from "./pages/privacyPolicy/PrivacyPolicy";
function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PublicRoute>
                  <AboutUs />
                </PublicRoute>
              }
            />
            <Route
              path="/privacyPolicy"
              element={
                <PublicRoute>
                  <PrivacyPolicy />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <NoUserRoute>
                  <Login />
                </NoUserRoute>
              }
            />
            <Route
              path="/register"
              element={
                <NoUserRoute>
                  <Register />
                </NoUserRoute>
              }
            />
            <Route
              path="/editProfile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/wallet"
              element={
                <PrivateRoute>
                  <Wallet />
                </PrivateRoute>
              }
            />
            <Route
              path="/createQuiz"
              element={
                <PrivateRoute>
                  <CreateQuiz />
                </PrivateRoute>
              }
            />
            <Route
              path="/joinQuiz"
              element={
                <PrivateRoute>
                  <JoinQuiz />
                </PrivateRoute>
              }
            />
            <Route
              path="/quiz/:quizId"
              element={
                <PrivateRoute>
                  <Questions />
                </PrivateRoute>
              }
            />
            <Route
              path="/leaderboard/:quizId"
              element={
                <PrivateRoute>
                  <Leaderboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/joinQuiz/:quizId"
              element={
                <PrivateRoute>
                  <JoinQuizCard />
                </PrivateRoute>
              }
            />
            <Route
              path="/result/:quizId"
              element={
                <PrivateRoute>
                  <OneV />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

//rafc

export default App;
