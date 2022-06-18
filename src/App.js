import { BrowserRouter, Routes, Route } from "react-router-dom";
// css
import "./assets/css/app.css";

// routes
import Homepage from "./views/Home/Homepage";
import Dashboard from "./views/dashboard";
import Auth from "./views/auth";
import Redux from "./views/Redux";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/redux" element={<Redux />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
