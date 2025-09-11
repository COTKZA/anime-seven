import AuthLayout from "../../../components/layouts/admin/AuthLayout"

const Register = () => {
  return (
    <AuthLayout>
        <div className="h-screen w-screen flex items-center justify-center">
        <div className="bg-[#1f2326] max-w-md w-full p-8 mx-2 sm:mx-0 rounded-md shadow-xl/40">
          <div className="flex items-center justify-center mb-8">
            <img src="/images/logo/logoAS2.png" className="w-full h-auto" alt="" />
          </div>

          <form action="" className="space-y-5">

            <div>
              <label htmlFor="" className="text-md text-white">ชื่อ</label>
              <input type="text" placeholder="ชื่อ" className="w-full p-2  border border-gray-300 outline-none text-sm focus:ring-1 focus:ring-blue-400 rounded placeholder:text-xs placeholder:text-gray-400 bg-white" />
            </div>

            <div>
              <label htmlFor="" className="text-md text-white">อีเมล</label>
              <input type="email" placeholder="อีเมล" className="w-full p-2  border border-gray-300 outline-none text-sm focus:ring-1 focus:ring-blue-400 rounded placeholder:text-xs placeholder:text-gray-400 bg-white" />
            </div>

            <div>
              <label htmlFor="" className="text-md text-white">รหัสผ่าน</label>
              <input type="password" placeholder="รหัสผ่าน" className="w-full p-2  border border-gray-300 outline-none text-sm focus:ring-1 focus:ring-blue-400 rounded placeholder:text-xs placeholder:text-gray-400 bg-white" />
            </div>

             <div>
              <label htmlFor="" className="text-md text-white">ยืนยันรหัสผ่าน</label>
              <input type="password" placeholder="ยืนยันรหัสผ่าน" className="w-full p-2  border border-gray-300 outline-none text-sm focus:ring-1 focus:ring-blue-400 rounded placeholder:text-xs placeholder:text-gray-400 bg-white" />
            </div>

            <button className="bg-blue-500 w-full rounded-md p-3 text-white hover:bg-blue-600 mt-4">สมัคร</button>
          </form>

        </div>
      </div>
    </AuthLayout>
  )
}

export default Register