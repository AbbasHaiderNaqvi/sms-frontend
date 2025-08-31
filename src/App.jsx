import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Auth/registration';
import Login from './pages/Auth/Login';
import Dashboard from './pages/dashboard/dashboard';
import './components/styles.css';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;