import { BrowserRouter, Routes, Route } from "react-router-dom";
import Savings from "./pages/authorization/Savings";
import TopNav from "./utils/reusable/TopNav";
import SideBar from "./utils/reusable/SideBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Savings />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/top" element={<TopNav />} />
          <Route path="/side" element={<SideBar />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
