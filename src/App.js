import { BrowserRouter, Routes, Route } from "react-router-dom";
// css
import "./assets/css/app.css";

// routes
import Homepage from "./views/Homepage";
import Dashboard from "./views/dashboard";
import Auth from "./views/auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
