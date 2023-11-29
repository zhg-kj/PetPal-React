import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SeekerProfile from './pages/SeekerProfile';
import ShelterProfile from './pages/ShelterProfile';
import Applications from './pages/Applications';
import ManagePets from './pages/ManagePets';

function App() {
  const [user, setUser] = useState({first_name: "Kai", last_name: "Zhuang", email: "kai@kai.com", isSeeker: false})
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/profile" element={user.isSeeker ? <SeekerProfile user={user} /> : <ShelterProfile user={user} />} />
        {user.isSeeker ? <Route path="/applications" element={<Applications user={user} />} /> : <Route path="/manage/pets" element={<ManagePets user={user} />} />}
      </Routes>
    </Router>
  );
}

export default App;
