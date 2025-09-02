import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginUser from "./Pages/LoginUser";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
