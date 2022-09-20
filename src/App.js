import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AdminDashboard  from './pages/AdminDashboard'
import Register from './pages/Register';
import EditUser from './pages/EditUser';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/user/userProfile/Profile';
import Featured from './pages/user/userHome/Featured';
import List from './pages/user/UserLists/List'
import HotelDetail from './pages/user/userimgDetails/HotelDetail';
function App() {
  return (
  <>
    <Router>

    <div className="container">
      <Header/>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin" element={<AdminDashboard/>}/>
      <Route path="/home" element={<Featured/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/details" element={<HotelDetail/>}/>
      <Route path='/editUser/:id' element={<EditUser/>} />
      {/* <Route path="/admin/register" element={<Register/>}/> */}
      <Route path='/*' element={<ErrorPage/>} />
     </Routes>
    </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
