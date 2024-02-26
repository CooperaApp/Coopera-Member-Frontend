import { BrowserRouter, Routes, Route } from "react-router-dom";
import Savings from "./pages/authorization/Savings";
import RegistrationPage from "./pages/authentication/components/registrationPage";
import LoginPage from "./pages/authentication/components/loginPage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Savings />} />
          <Route path="/membersRegister" element={<RegistrationPage/>} />
          <Route path="/memberslogin" element={<LoginPage/>} />
          <Route path="/savings" element={<Savings />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
