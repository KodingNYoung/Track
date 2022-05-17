import { BrowserRouter, Routes, Route } from "react-router-dom";
// css
import "./assets/css/app.css";

// routes
import Homepage from "./views/Homepage";
import Dashboard from "./views/dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
