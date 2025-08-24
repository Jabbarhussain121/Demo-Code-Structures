import './App.css';
import Navbar from './Component/Common/Navbar'; // ✅ match filename exactly
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <Navbar />

      {/* You can put this div outside Routes */}

      <Routes>
        <Route
          path="/"
          element={<h1 className="text-center text-2xl font-bold mt-10">Welcome to MyApp</h1>}
        />
       

        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
