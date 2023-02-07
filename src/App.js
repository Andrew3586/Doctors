import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Appointment from "./pages/Appointment";
import AddAppointmentsForm from "./components/AddAppointmentsForm";
import AddDoctorsForm from "./components/AddDoctorForm";
import DoctorsList from "./components/DoctorsListTable";
import EditDoctor from "./components/EditDoctor";
import AddDoctor from "./components/AddDoctor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/adddoctors" element={<AddDoctorsForm />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/addappointment" element={<AddAppointmentsForm />} />
        <Route path="/doctorslist" element={<DoctorsList />} />
        <Route path="/editdoctor" element={<EditDoctor />} />
        <Route path="/adddoctor" element={<AddDoctor />} />
        <Route path="*" element={<h1>Error Page Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
