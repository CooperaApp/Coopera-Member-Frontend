import { BrowserRouter, Routes, Route } from "react-router-dom";
import Savings from "./pages/authorization/Savings";
import TopNav from "./utils/reusable/TopNav";
import SideBar from "./utils/reusable/SideBar";
import ForgotPassword from "./pages/authorization/components/ForgotPassword";
import RegistrationPage from "./pages/authentication/components/registerationPage";
import LoginPage from "./pages/authentication/components/loginPage";
import PasswordReset from "./pages/authorization/components/ResetPassword";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Savings />} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/reset-password" element={<PasswordReset/>}/>
          <Route path="/registration" element={<RegistrationPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/savings" element={<Savings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
