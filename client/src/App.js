import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AdminLogin from './components/signin/AdminLogin'
import UserLogin from './components/signin/UserLogin'
import Register from './components/Patients/Register';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import BookAppointment from './components/Appointment/BookAppointment';
import EditAppointment from './components/Appointment/EditAppointment';
import AdminDashboard from './components/Admin/AdminDashboard';
import DoctorDashboard from './components/Doctors/DoctorDashboard';
import PatientDashboard from './components/Patients/PatientDashboard';
import DoctorsAppointment from './components/Doctors/DoctorsAppointment';
import DoctorSchedule from './components/Doctors/DoctorSchedule';
import AdminAlDoctors from './components/Admin/AdminAlDoctors';
import AdminPatient from './components/Admin/AdminPatient';
import AdminAppointment from './components/Admin/AdminAppointments';
import AdminDocShedule from './components/Admin/AdminDocSchedule';
import Doctor from './components/Doctors/Doctor';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ErrorPage from './components/Error/ErrorPage';
import Signup from './components/Admin/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/doctors' element={<Doctor />}/>
        <Route path='/admin/signup' element={<Signup />}/>
        <Route path='/adminlogin' element={<AdminLogin />}/>
        <Route path='/forgotpassword' element={<ForgotPassword />}/>
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>
        <Route path='/admin/doctor' element={<AdminAlDoctors />}/>
        <Route path='/admin/patient' element={<AdminPatient />}/>
        <Route path='/admin/appointment' element={<AdminAppointment />}/>
        <Route path='/admin/doctor/schedule' element={<AdminDocShedule />}/>
        <Route path='/userlogin' element={<UserLogin />}/>
        <Route path='/doctor/appointment' element={<BookAppointment />}/>
        <Route path='/doctor/appointment/edit' element={<EditAppointment />}/>
        <Route path='/doctor/dashboard' element={<DoctorDashboard />}/>
        <Route path='/doctor/allappointments' element={<DoctorsAppointment />}/>
        <Route path='/doctor/schedule' element={<DoctorSchedule />}/>
        <Route path='/patient/dashboard' element={<PatientDashboard />}/>
        <Route path='/patient/register' element={<Register />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
