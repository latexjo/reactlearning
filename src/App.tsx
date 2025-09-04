import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CardLogin } from "./routes/Login";
import { CardSignup } from "./routes/Signup";
import { HeroPage } from "./lib/reusables/Hero"
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<CardLogin />} />
        <Route path="/signup" element={<CardSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
