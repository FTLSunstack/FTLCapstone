import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../tailwind.css";
import HomePage from "../Pages/Home/HomePage/HomePage.jsx";
import IDEPage from "../Pages/IDE/IDEPage/IDEPage";
import LoginPage from "../Pages/Auth/LogIn/LoginPage.jsx";
import GlossaryPage from "../Pages/Glossary/GlossaryPage/GlossaryPage.jsx";
import SignUpPage from "../Pages/Auth/Signup/SignUpPage.jsx";
import PrivateRoutes from "../Pages/Auth/PrivateRoutes.jsx";
import { AuthProvider } from "../../Context/AuthContext.jsx";
import ResetPasswordPage from "../Pages/Auth/ResetPasswordPage.jsx";
import ProfilePage from "../Pages/Profile/ProfilePage/ProfilePage.jsx";
import { ToastContainer, Bounce } from 'react-toastify';
import "react-toastify/ReactToastify.css";

function App() {
  const [language, setLanguage] = useState("Español");

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route
                path="/glossary"
                element={
                  <GlossaryPage language={language} setLanguage={setLanguage} />
                }
              />
              <Route
                path="/ide"
                element={
                  <IDEPage language={language} setLanguage={setLanguage} />
                }
              />
            </Route>
            <Route path="/login" element={<LoginPage language={language} />} />
            <Route path="/signup" element={<SignUpPage language={language} />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route
              path="/"
              element={<HomePage language={language} setLanguage={setLanguage} />}
            />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
