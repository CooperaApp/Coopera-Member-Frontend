import { BrowserRouter, Routes, Route } from "react-router-dom";
import Savings from "./pages/authorization/components/Savings";
import ForgotPassword from "./pages/authorization/components/ForgotPassword";
import RegistrationPage from "./pages/authentication/components/registrationPage";
import LoginPage from "./pages/authentication/components/loginPage";
import PasswordReset from "./pages/authorization/components/ResetPassword";
import Dashboard from "./pages/authorization/components/Dashboard";
import "../src/styles/Tailwind.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Savings />} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/reset-password" element={<PasswordReset/>}/>
          <Route path="/membersRegister" element={<RegistrationPage/>} />
          <Route path="/membersLogin" element={<LoginPage/>} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
