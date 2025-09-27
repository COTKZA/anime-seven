import { NavLink } from "react-router";
import Facebook from "./Facebook";
import Category from "./Category";
import Popular from "./Popular";
import Pagination from "../layouts/user/Pagination";
import axios from "axios"
import { useState, useEffect } from "react"
import type { userstory } from "../../types/interface";
import Loading from "../layouts/user/Loading";

const Anime = () => {
  const [story, setStory] = useState<userstory[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const Storys = async (pageNum: number = 1) => {
    try {
      setLoading(true)

      const res = await axios.get(`${import.meta.env.VITE_API_USER}/storys`, {
        params: { page: pageNum, limit: 10 },
      })

      setStory(res.data.data)
      setPage(res.data.page)
      setTotalPage(res.data.total_page)
    } catch (error: any) {
      setError(error.response?.data?.error || "Failed to fetch data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    Storys(page)
  }, [page])
  return (
    <>
      <div className="flex xl:flex-row flex-col gap-8 px-3.5 lg:px-0 mt-4">
        <div className="shadow-xl/40">
          <div className="bg-[#e64a45] rounded-t-sm border">
            <div className="flex items-center justify-between p-2.5">
              <h3 className="text-white text-md">อนิเมะอัพเดตล่าสุด</h3>
              <NavLink
                to=""
                className={
                  "bg-[#36393E] text-xs text-white p-0.5 px-2 rounded-sm font-bold"
                }
              >
                รายชื่ออนิเมะทั้งหมด &gt;&gt;
              </NavLink>
            </div>
          </div>
          <div className="bg-[#2e3338] rounded-b-sm p-4 border">
            {error && <p className="text-red-500 text-lg text-center">เกิดข้อผิดพลาด</p> }
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">

              {loading ? (
                <Loading />
              ) : story.length > 0 ? (
                story.map((items) => (
                  <div className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden p-1">
                    <div className="relative">
                      <div className="relative">
                        <img
                          src={items.cover_image}
                          loading="lazy"
                          className="sm:w-[140px] md:w-full sm:h-[196px] md:h-[255px]"
                          alt={items.title}
                        />

                        <span className="absolute top-0 right-0 text-[10px] font-bold text-white bg-[#ee5f5b] border border-white rounded-sm px-2 py-0 shadow-md">
                          {items.status === "ongoing" ? "ยังไม่จบ" : items.status === "completed" ? "จบแล้ว" : "-"}
                        </span>
                      </div>
                      <NavLink
                        to=""
                        className={
                          "absolute bottom-0 left-0 w-full bg-black/60 text-xs px-1 py-1 text-white text-center hover:underline"
                        }
                      >
                        {items.title} {items.episodes_count}
                      </NavLink>
                    </div>
                  </div>
                ))) : (
                <div className="flex justify-center items-center">
                  <p className="text-white">ไม่มีข้อมูล</p>
                </div>
              )}

            </div>
            <div className="flex items-center justify-center mt-7">
              <Pagination currentPage={page} totalPages={totalPage} onPageChange={(page) => setPage(page)} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Facebook />
          <Category />
          <Popular />
        </div>
      </div>
    </>
  );
};

export default Anime;
