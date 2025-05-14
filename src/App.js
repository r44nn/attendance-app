import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// USER PAGES
import Login from "./user/Login";
import Register from "./user/Register";
import Dashboard from "./user/Dashboard";
import Absensi from "./user/Absensi";
import Cuti from "./user/Cuti";
import GantiPassword from "./user/GantiPassword";

// ADMIN PAGES 
import AdminDashboard from "./admin/AdminDashboard";
import DaftarPegawai from "./admin/DaftarPegawai";
import RiwayatAbsensiAdmin from "./admin/RiwayatAbsensiAdmin";
import RiwayatCutiAdmin from "./admin/RiwayatCutiAdmin";
import GantiPasswordAdmin from "./admin/GantiPasswordAdmin";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/absensi" element={<Absensi />} />
          <Route path="/cuti" element={<Cuti />} />
          <Route path="/gantipassword" element={<GantiPassword />} />

          {}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/pegawai" element={<DaftarPegawai />} />
          <Route path="/admin/riwayat-absensi" element={<RiwayatAbsensiAdmin />} />
          <Route path="/admin/riwayat-cuti" element={<RiwayatCutiAdmin />} />
          <Route path="/admin/ganti-password" element={<GantiPasswordAdmin />} />
        </Routes>

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
