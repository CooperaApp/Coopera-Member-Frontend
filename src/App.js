import { BrowserRouter, Routes, Route } from "react-router-dom";
import Savings from "./pages/authorization/Savings";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Savings />} />
          <Route path="/savings" element={<Savings />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
