import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Registration from './components/registration';


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
