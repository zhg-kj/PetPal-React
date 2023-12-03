import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Applications from './pages/Applications';
import ManagePets from './pages/ManagePets';
import PetDetails from './pages/PetDetails';
import ShelterDetails from './pages/ShelterDetails';
import Login from './pages/Login';
import Adopt from './pages/Adopt';
import AddPet from './pages/AddPet';
import UpdatePet from './pages/UpdatePet';
import Application from './pages/Application';
import { getUser } from './api/account/getUser';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const fetchShelter = async () => {
      try {
        const user = await getUser();
        setUser(user)
      } catch {
        console.log("Couldn't get user details");
      }
    }

    if (localStorage.getItem('access_token')) {
      fetchShelter();
    }
  }, [])
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/auth/login" element={<Login user={user} />} />
        <Route path="/auth/register" element={<Register user={user} />} />
        {user ? (
          <>
            <Route path="/profile" element={<Profile user={user} />} />
            {!user.is_seeker ? <Route path="/manage/pets" element={<ManagePets user={user} />} /> : <></>}
            <Route path="/applications" element={<Applications user={user} />} />
            <Route path="/details" element={<PetDetails user={user} />} />
            <Route path="/shelter" element={<ShelterDetails user={user} />} />
            <Route path="/adopt" element={<Adopt user={user} />} />
            <Route path="/pet/add" element={<AddPet user={user} />} />
            <Route path="/pet/update" element={<UpdatePet user={user} />} />
            <Route path="/applications/manage" element={<Application user={user} />} />
          </>
        ) : (
          <></>
        )}
      </Routes>
    </Router>
  );
}

export default App;
