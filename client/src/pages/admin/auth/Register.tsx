import { type FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toastError, toastWarning } from "../../../utils/toast";
import { ToastContainer } from "react-toastify";
import AuthLayout from "../../../components/layouts/admin/AuthLayout";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toastWarning("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      toastWarning("Password must be at least 8 characters.");
    }

    try {
      setLoading(true);
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        { username, email, password_hash: password }
      );

      navigate("/admin/login");
    } catch (err: any) {
      toastError(err.response?.data?.error || "An error occurred.");
    } finally {
      setLoading(false);
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
              alt=""
            />
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label htmlFor="" className="text-md text-white">
                ชื่อ
              </label>
              <input
                type="text"
                placeholder="ชื่อ"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                className="w-full p-2  border border-gray-300 outline-none text-sm focus:ring-1 focus:ring-blue-400 rounded placeholder:text-xs placeholder:text-gray-400 bg-white"
              />
            </div>

            <div>
              <label htmlFor="" className="text-md text-white">
                อีเมล
              </label>
              <input
                type="email"
                placeholder="อีเมล"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full p-2  border border-gray-300 outline-none text-sm focus:ring-1 focus:ring-blue-400 rounded placeholder:text-xs placeholder:text-gray-400 bg-white"
              />
            </div>

            <div>
              <label htmlFor="" className="text-md text-white">
                รหัสผ่าน
              </label>
              <input
                type="password"
                placeholder="รหัสผ่าน"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full p-2  border border-gray-300 outline-none text-sm focus:ring-1 focus:ring-blue-400 rounded placeholder:text-xs placeholder:text-gray-400 bg-white"
              />
            </div>

            <div>
              <label htmlFor="" className="text-md text-white">
                ยืนยันรหัสผ่าน
              </label>
              <input
                type="password"
                placeholder="ยืนยันรหัสผ่าน"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                className="w-full p-2  border border-gray-300 outline-none text-sm focus:ring-1 focus:ring-blue-400 rounded placeholder:text-xs placeholder:text-gray-400 bg-white"
              />
            </div>

            <button type="submit" className="bg-blue-500 w-full rounded-md p-3 text-white hover:bg-blue-600 mt-4" disabled={loading}>
              สมัคร
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </AuthLayout>
  );
};

export default Register;
