import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const [rekap, setRekap] = useState({});
  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    
    const userData = JSON.parse(localStorage.getItem("user")) || { nama: "User Dummy" };
    setUser(userData);

  
    setRekap({
      hadir: 15,
      sakit: 2,
      izin: 1,
      cuti: 3,
    });

    
    setRiwayat([
      {
        tanggal: "2025-05-13",
        checkIn: "07:35",
        checkOut: "17:02",
        status: "Hadir",
      },
      {
        tanggal: "2025-05-12",
        checkIn: null,
        checkOut: null,
        status: "Cuti",
      },
      {
        tanggal: "2025-05-11",
        checkIn: "08:00",
        checkOut: "16:55",
        status: "Izin",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F6F6] font-sans">
      {}
      <div className="flex justify-between items-center px-8 py-4 border-b bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <img src="/logowinnicode.png" alt="Logo" className="h-9 w-auto" />
        </div>
        <div className="flex space-x-6 text-sm font-medium text-gray-700">
          <a href="/dashboard" className="hover:text-blue-600">Dashboard</a>
          <a href="/absensi" className="hover:text-blue-600">Absensi</a>
          <a href="/cuti" className="hover:text-blue-600">Pengajuan Izin</a>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
          className="text-sm text-gray-700 hover:text-red-500"
        >
          Keluar
        </button>
      </div>

      {}
      <div className="bg-[#3B3B3B] text-white text-center py-2 font-semibold text-sm">
        Dashboard
      </div>

      {}
      <main className="px-4 py-6">
        <div className="max-w-[900px] mx-auto space-y-6">
          {}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-md shadow-md p-5 col-span-2">
              <p className="text-base text-gray-900 font-medium">
                Selamat Datang Kembali, Hari ini{" "}
                {new Date().toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}.
              </p>
              <h2 className="text-2xl font-semibold mt-2 text-gray-900">{user.nama}</h2>
              <p className="text-sm text-gray-500 mt-2">Jam Kerja 07.30 – 17.00</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <StatCard title="Hadir" value={rekap.hadir} color="bg-[#4CAF50]" />
              <StatCard title="Sakit" value={rekap.sakit} color="bg-[#FFA726]" />
              <StatCard title="Izin" value={rekap.izin} color="bg-[#FFC107]" />
              <StatCard title="Cuti" value={rekap.cuti} color="bg-[#EF9A9A]" />
            </div>
          </div>

          {/* Menu Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ActionCard
              title="Absensi"
              subtitle="Form Absensi"
              link="/absensi"
              color="bg-[#FFAB5B]"
              footerColor="bg-[#D89352]"
              footer="Absen >"
            />
            <ActionCard
              title="Izin"
              subtitle="Form Pengajuan Izin"
              link="/cuti"
              color="bg-[#0B2E23]"
              footerColor="bg-[#0B2E23]"
              footer="Izin >"
            />
            <ActionCard
              title="Password"
              subtitle="Ganti Password"
              link="/gantipassword"
              color="bg-[#FE4F2D]"
              footerColor="bg-[#A02912]"
              footer="More Info >"
            />
          </div>

          {}
          <div className="max-w-[900px] mx-auto bg-white rounded-md shadow-md overflow-x-auto">
            <div className="px-4 py-3 border-b text-gray-800 font-semibold text-sm">
              Riwayat Absensi
            </div>
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">Tanggal</th>
                  <th className="p-3">Jam Masuk Kerja</th>
                  <th className="p-3">Jam Selesai Kerja</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {riwayat.map((item, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="p-3">
                      {new Date(item.tanggal).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>
                    <td className="p-3">{item.checkIn || "-"}</td>
                    <td className="p-3">{item.checkOut || "-"}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${
                          item.status === "Hadir"
                            ? "text-green-600 border-green-500"
                            : item.status === "Cuti"
                            ? "text-red-600 border-red-400"
                            : item.status === "Izin"
                            ? "text-yellow-700 border-yellow-400"
                            : "text-gray-600 border-gray-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {}
          <footer className="text-center text-xs text-gray-500 mt-6">
            Winnicode © {new Date().getFullYear()}. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className={`p-4 rounded-md shadow text-white transform transition-transform duration-200 hover:scale-105 ${color}`}>
      <div className="text-sm font-medium">{title}</div>
      <div className="text-lg font-bold">{value ?? 0} Hari</div>
    </div>
  );
}

function ActionCard({ title, subtitle, link, color, footer, footerColor }) {
  return (
    <a
      href={link}
      className="rounded-md shadow-md block overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <div className={`p-4 ${color} text-white`}>
        <div className="text-lg font-bold">{title}</div>
        <div className="text-sm mt-1">{subtitle}</div>
      </div>
      <div className={`${footerColor} text-sm py-1 text-white text-center font-medium`}>
        {footer}
      </div>
    </a>
  );
}
