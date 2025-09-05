const Pagination = () => {
    return (
        <>
            <nav aria-label="Page navigation">
                <ul className="inline-flex -space-x-px text-base h-10 rounded-md">
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-9.5 ms-0 leading-tight border border-[#3a3f44]  text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] rounded-s-lg">ก่อนหน้า</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-9.5 leading-tight border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539]">1</a>
                    </li>
                    <li> 
                        <a href="#" className="flex items-center justify-center px-4 h-9.5 leading-tight  border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539]">2</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-9.5 leading-tight  border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539]">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-9.5 leading-tight border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539]">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-9.5 leading-tight border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539]">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-9.5 leading-tight border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] rounded-e-lg">ถัดไป</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination