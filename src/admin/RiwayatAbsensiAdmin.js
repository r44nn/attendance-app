import React, { useEffect, useState } from "react";

export default function RiwayatAbsensiAdmin() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const dummyData = [
      {
        tanggal: "2025-05-13",
        nama: "Budi Santoso",
        email: "budi@gmail.com",
        checkIn: "07:35",
        checkOut: "17:02",
        status: "Hadir",
      },
      {
        tanggal: "2025-05-13",
        nama: "Dewi Anggraini",
        email: "dewi@gmail.com",
        checkIn: "07:45",
        checkOut: "17:00",
        status: "Hadir",
      },
      {
        tanggal: "2025-05-12",
        nama: "Budi Santoso",
        email: "budi@gmail.com",
        checkIn: "07:40",
        checkOut: null,
        status: "Hadir",
      },
    ];

    setData(dummyData);
    setFiltered(dummyData);
    setLoading(false);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    applyFilter(value, tanggal);
  };

  const handleTanggalChange = (e) => {
    const value = e.target.value;
    setTanggal(value);
    applyFilter(search, value);
  };

  const applyFilter = (nama, tanggal) => {
    const result = data.filter((item) => {
      const cocokNama = item.nama.toLowerCase().includes(nama.toLowerCase());
      const cocokTanggal = tanggal ? item.tanggal === tanggal : true;
      return cocokNama && cocokTanggal;
    });
    setFiltered(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 font-sans">
      <div className="max-w-[1000px] mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Riwayat Absensi Pegawai</h2>
          <button
            onClick={() => alert("Export tidak tersedia di versi statis")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
          >
            Export Excel
          </button>
        </div>

        {/* Filter nama dan tanggal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Cari nama pegawai..."
            value={search}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border rounded shadow-sm"
          />
          <input
            type="date"
            value={tanggal}
            onChange={handleTanggalChange}
            className="w-full px-4 py-2 border rounded shadow-sm"
          />
        </div>

        {/* Tabel */}
        <div className="bg-white rounded shadow-md overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="p-3">Tanggal</th>
                <th className="p-3">Nama</th>
                <th className="p-3">Email</th>
                <th className="p-3">Check-in</th>
                <th className="p-3">Check-out</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-400 italic">
                    Memuat data...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-400 italic">
                    Tidak ada data ditemukan.
                  </td>
                </tr>
              ) : (
                filtered.map((item, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="p-3">{item.tanggal}</td>
                    <td className="p-3">{item.nama}</td>
                    <td className="p-3">{item.email}</td>
                    <td className="p-3">{item.checkIn || "-"}</td>
                    <td className="p-3">{item.checkOut || "-"}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${
                          item.status === "Hadir"
                            ? "text-green-600 border-green-500"
                            : "text-yellow-600 border-yellow-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
