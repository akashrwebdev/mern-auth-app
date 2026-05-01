import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/auth/register", form);
      setMessage("Account created successfully ✨");
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-[900px] h-[550px] grid grid-cols-2 rounded-2xl overflow-hidden shadow-xl bg-white">
        {/* LEFT PANEL */}
        <div className="relative bg-gradient-to-b from-blue-700 to-blue-500 text-white flex flex-col items-center justify-center p-10">
          <div className="absolute right-0 top-0 h-full w-20 bg-blue-400 rounded-l-full opacity-40"></div>

          <div className="text-center z-10">
            <p className="text-sm mb-4">Welcome to</p>

            <div className="flex flex-col items-center mb-6">
              <div className="bg-white p-4 rounded-full mb-3">
                <span className="text-blue-600 text-2xl">🚀</span>
              </div>
              <h1 className="text-xl font-semibold">Spacer</h1>
            </div>

            <p className="text-sm leading-relaxed opacity-90">
              Create your account to unlock premium features and stay updated
              with the latest news.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col justify-center px-10">
          <h2 className="text-xl font-semibold mb-2">Create your account</h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your details to create your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Enter Full name"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {
              <div className="flex items-center text-xs text-gray-500">
                <input type="checkbox" className="mr-2" />
                <span>I agree to the Terms and Conditions</span>
              </div>
            }

            <button
              type="submit"
              className="w-full py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Sign Up
            </button>

            {message && (
              <p className="text-sm text-center text-gray-500">{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
