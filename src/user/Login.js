import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const role = email === "admin@gmail.com" ? "admin" : "user";

    
    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("user", JSON.stringify({ nama: "User", role }));

    
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        {}
        <div className="flex justify-center mb-6">
          <img src="/logowinnicode.png" alt="Logo" className="h-16" />
        </div>

        {}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {}
        <p className="text-center text-sm mt-4">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Daftar sekarang
          </a>
        </p>

        {}
        <div className="mt-8 text-sm">
          <h3 className="font-semibold text-gray-700 mb-2 text-center">Panduan Login</h3>
          <table className="w-full text-left text-sm border border-gray-300 rounded-md overflow-hidden">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Password</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Admin</td>
                <td className="px-4 py-2">admin@gmail.com</td>
                <td className="px-4 py-2">123</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">User</td>
                <td className="px-4 py-2">user@gmail.com</td>
                <td className="px-4 py-2">123</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
