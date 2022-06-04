import Team from "./Components/Team/Team";
import Profile from "./Components/Team/Profile/Profile";
import Admin from "./Components/Admin/Admin";
import AddAdmin from "./Components/Admin/AddAdmin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Layouts/Header/Header";

function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Team></Team> }></Route>
            <Route path='/profile/:username' element={<Profile></Profile> }></Route>
            <Route path='/admin' element={<Admin></Admin> }></Route>
            <Route path='/AddAdmin' element={<AddAdmin></AddAdmin> }></Route>
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
