import { useState } from "react";
import type { FormEvent , ChangeEvent } from "react";
import { useNavigate } from "react-router";
import AuthLayout from "../../../components/layouts/admin/AuthLayout";
import { useAuth } from "../../../context/AuthProvider";
import { toastError } from "../../../utils/toast";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password_hash: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      await login(formData);
      navigate("/admin/dashboard")
    } catch (error: any) {
      toastError(error?.response?.data?.error || "Login failed")
    } finally {
      setLoading(false)
    }
  };

  return (
    <AuthLayout>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="bg-[#1f2326] max-w-md w-full p-8 mx-2 sm:mx-0 rounded-md shadow-xl/40">
          <div className="flex items-center justify-center mb-8">
            <img
              src="/images/logo/logoAS2.png"
              className="w-full h-auto"
              alt="Logo"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="text-md text-white">
                อีเมล
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="อีเมล"
                autoComplete="username"
                required
                className="w-full p-2 border border-gray-300 outline-none text-sm focus:ring-1 focus:ring-blue-400 rounded placeholder:text-xs placeholder:text-gray-400 bg-white"
              />
            </div>
            <div>
              <label htmlFor="password_hash" className="text-md text-white">
                รหัสผ่าน
              </label>
              <input
                id="password_hash"
                name="password_hash"
                type="password"
                value={formData.password_hash}
                onChange={handleChange}
                placeholder="รหัสผ่าน"
                autoComplete="current-password"
                required
                className="w-full p-2 border border-gray-300 outline-none text-sm focus:ring-1 focus:ring-blue-400 rounded placeholder:text-xs placeholder:text-gray-400 bg-white"
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 w-full rounded-md p-3 text-white hover:bg-green-600 mt-4"
              disabled={loading}
            >
              เข้าสู่ระบบ
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </AuthLayout>
  );
};

export default Login;
