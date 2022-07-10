import { BrowserRouter, Routes, Route } from "react-router-dom";
// css
import "assets/css/app.css";

// routes
import Home from "views/Home";
import Dashboard from "views/dashboard";
import Auth from "views/auth";
import Redux from "views/Redux";
import Toast from "components/feedbacks/Toasts";

function App() {
  return (
    <div className="App">
      <Toast />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/redux" element={<Redux />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
