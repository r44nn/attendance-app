import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const tanggal = "Selasa, 14 Mei 2025";
  const user = { nama: "Admin" };

  const dataCard = [
    {
      jumlah: 15,
      label: "Pegawai",
      color: "bg-orange-400",
      footerColor: "bg-orange-500",
      link: "/admin/pegawai",
      textColor: "text-white",
    },
    {
      jumlah: 3,
      label: "Kelola Ajuan Cuti",
      color: "bg-emerald-900",
      footerColor: "bg-emerald-800",
      link: "/admin/riwayat-cuti",
      textColor: "text-white",
    },
    {
      jumlah: "Riwayat",
      label: "Riwayat Absensi",
      color: "bg-cyan-700",
      footerColor: "bg-cyan-800",
      link: "/admin/riwayat-absensi",
      textColor: "text-white",
    },
    {
      jumlah: "Password",
      label: "Ganti Password",
      color: "bg-red-500",
      footerColor: "bg-red-700",
      link: "/admin/ganti-password",
      textColor: "text-white",
    },
  ];

  const aktivitasHariIni = [
    {
      nama: "Dewi Anggraini",
      aktivitas: "Check In",
      waktu: "08:01",
    },
    {
      nama: "Budi Santoso",
      aktivitas: "Check Out",
      waktu: "17:04",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6] font-sans">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-3 bg-white border-b shadow-sm">
        <img src="/logowinnicode.png" alt="Logo" className="h-9 w-auto" />
        <div className="hidden md:flex gap-5 text-sm text-gray-700 font-medium">
          <a href="/admin/riwayat-absensi" className="hover:text-blue-600">Riwayat Absensi</a>
          <a href="/admin/riwayat-cuti" className="hover:text-blue-600">Riwayat Cuti</a>
          <a href="/admin/pegawai" className="hover:text-blue-600">Kelola Pegawai</a>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-700">
          <button
            onClick={() => window.location.href = "/"}
            className="hover:text-red-500"
          >
            Keluar
          </button>
        </div>
      </div>

      {/* Header Bar */}
      <div className="bg-[#3B3B3B] text-white text-center py-2 font-semibold text-sm">
        Dashboard
      </div>

      {/* Main Content */}
      <main className="px-4 py-6">
        <div className="max-w-[1000px] mx-auto space-y-6">
          {/* Greeting Card */}
          <div className="bg-white shadow rounded p-6">
            <p className="text-gray-700 text-sm">Selamat Datang Kembali, Hari ini {tanggal}.</p>
            <h2 className="text-xl font-bold mt-2">{user.nama}</h2>
            <p className="text-sm text-gray-500 mt-2">Jam Kerja 07.30 – 17.00</p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dataCard.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(item.link)}
                className="rounded-xl cursor-pointer overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className={`p-4 h-28 flex flex-col justify-between ${item.color} ${item.textColor}`}>
                  <div className="text-3xl font-bold">{item.jumlah}</div>
                  <div className="text-sm font-medium">{item.label}</div>
                </div>
                <div className={`${item.footerColor} text-xs py-1 px-2 text-white text-center`}>
                  More Info &gt;
                </div>
              </div>
            ))}
          </div>

          {/* Today's Activity */}
          <div className="bg-white rounded-md shadow-md p-4">
            <h3 className="text-base font-semibold mb-3 text-gray-800">Aktivitas Hari Ini</h3>
            <div className="space-y-2 text-sm text-gray-700 max-h-[250px] overflow-y-auto scrollbar-thin">
              {aktivitasHariIni.map((log, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-1 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">{log.nama}</p>
                    <p className="text-gray-600 text-xs">
                      {log.aktivitas} - {log.waktu}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-xs text-gray-500 mt-10">
            Winnicode © 2025. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}
