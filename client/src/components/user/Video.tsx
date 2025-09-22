import { useEffect } from "react";
import Facebook from "./Facebook"
import Category from "./Category"
import Popular from "./Popular";
import { TfiReload } from "react-icons/tfi";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { NavLink } from "react-router";

const Video = () => {
  useEffect(() => {
    const player = new Plyr("#player", {
      controls: [
        "play-large",
        "play",
        "rewind",
        "fast-forward",
        "progress",
        "current-time",
        "mute",
        "volume",
        "pip",
        "fullscreen",
      ],
      hideControls: true,
      clickToPlay: true,
    });

    player.elements.controls.style.display = "none";

    player.on("play", () => {
      player.elements.controls.style.display = "flex";
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex xl:flex-row flex-col gap-8 px-3.5 lg:px-0">
        <div>
          <div className="bg-[#e64a45] rounded-t-sm border">
            <div className="p-2.5">
              <h3 className="text-white text-md">Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ 1-9 ซับไทย ยังไม่จบ</h3>
            </div>
          </div>
          <div className="bg-[#2e3338] rounded-b-sm p-4 border">
            <h2 className="text-[#C8C8C8] text-3xl text-center mb-3">เรื่อง Isekai Mokushiroku Mynoghra ไมนอกรา บันทึกวันอวสาน(ต่าง)โลก ตอนที่ 1 ซับไทย</h2>

            {/* <div className="flex items-center justify-center mb-3">
              <div className='rounded-sm bg-[#202020] xl:w-[728px] xl:h-[200px] p-1'>
                <img src="https://www.animeseven.com/pic/webp/juad888.webp" className="w-full h-full " alt="" />
              </div>
            </div> */}

            <div className="mb-3">
              <video id="player" poster="/images/poster.jpeg" playsInline controls>
                <source src="/video/SURIYA MQT X P6ICK - BU [Official Music Video].mp4" type="video/mp4" />
              </video>
            </div>

            {/* <div className="flex items-center justify-center mb-3">
              <div className='rounded-sm bg-[#202020] xl:w-[728px] xl:h-[200px] p-1'>
                <img src="https://www.animeseven.com/pic/webp/lotto432.webp" className="w-full h-full" alt="" />
              </div>
            </div> */}

            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center bg-[#EE5F5B] hover:bg-[#eb2421] text-white text-sm gap-2 p-2 rounded-sm border border-gray-800 mb-5">หนังไม่เล่น ตัวเล่นไม่แสดง กดที่นี่<TfiReload /></button>
            </div>
            <h2 className="text-[#C8C8C8] text-3xl text-center mb-4">เรื่อง Isekai Mokushiroku Mynoghra ไมนอกรา บันทึกวันอวสาน(ต่าง)โลก ตอนที่ 1 ซับไทย</h2>
            <p className="text-[#C8C8C8] text-sm mb-4">เกมจำลองสถานการณ์บริหารประเทศซึ่งมีโลกแฟนตาซีเป็นต้นแบบ 『Eternal Nations』 ผู้เล่นในตำนานซึ่งได้แรงค์อันดับ 1 อิระ ทาคุโตะ หมดสติไประหว่างพักรักษาตัวในโรงพยาบาล เมื่อรู้สึกตัวอีกที ทาคุโตะได้ลงมาสู่ทวีปอิดราเกียที่ราวกับเป็นโลกในเกมไปเสียแล้ว และผู้ที่ปรากฏตัวมาเบื้องหน้า คือยูนิตที่ทาคุโตะถูกใจที่สุดใน 『Eternal Nations』《อาทูผู้เน่าเฟะ》 เมื่ออาทูบอกกับทาคุโตะว่า “จำทุกอย่างได้” ทำให้ทาคุโตะทำการตัดสินใจอย่างหนึ่งขึ้น “──มาสร้างประเทศของพวกเรากันเถอะ ราชอาณาจักรของผมกับเธอ” ทาคุโตะตัดสินใจก่อตั้งประเทศแห่งความชั่ว 《ไมนอกรา》ด้วยกันกับอาทู ใช้ประโยชน์จากระบบของเกมที่เรียกได้ว่าเป็นสูตรโกงของโลกนี้ พร้อมกับเหล่าประชาชนดาร์คเอลฟ์ที่มีนิสัยเฉพาะตัว บริหารประเทศไปพร้อมอาทู ผู้เป็นวีรชนนั้นต่อไป──</p>
            <div className="text-center hover:underline">
              <NavLink to="" className={' text-white text-2xl'}>ดูตอนอื่นๆของ Isekai Mokushiroku Mynoghra ไมนอกรา บันทึกวันอวสาน(ต่าง)โลก -พิชิตใต้หล้าด้วยอารยธรรมแห่งหายนะ- คลิกเลย</NavLink>
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
  )
}

export default Video