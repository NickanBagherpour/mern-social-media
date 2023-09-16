import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "../scenes/home-page";
import LoginPage from "../scenes/login-page";
import ProfilePage from "../scenes/profile-page";

function App() {
  const isAuth = true;

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={isAuth ? <HomePage /> : <Navigate to="/" />}
          />
          <Route
            path="/profile/:userId"
            element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
