import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SingUp, SignIn, Browse } from "./pages";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
