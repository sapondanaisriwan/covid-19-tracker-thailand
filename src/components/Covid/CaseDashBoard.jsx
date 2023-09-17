import { url_today_cases_all } from "../../api/covid_urls";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

import AOS from 'aos';
import 'aos/dist/aos.css';


import { FcPlus, FcCalendar } from "react-icons/fc";

export default function CaseDashBoard() {
  const [data] = useFetch(url_today_cases_all);

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  const formatNumber = (key) => (data ? data[0][key].toLocaleString() : 0);
  const updateDate = data ? data[0]?.update_date.split(" ")[0] : "วันนี้"
  const cards = {
    total_case_excludeabroad: formatNumber("total_case_excludeabroad"),
    new_case_excludeabroad: formatNumber("new_case_excludeabroad"),
    total_recovered: formatNumber("total_recovered"),
    new_recovered: formatNumber("new_recovered"),
    total_death: formatNumber("total_death"),
    new_death: formatNumber("new_death"),
  };

  return (
    <div className="bg-[#353538]">
      <div className="max-w-5xl mx-auto w-full p-4 pt-[60px]" data-aos="fade-right">
        <div className="p-4 mt-12 mb-6">
          <h1 className="text-white text-center text-3xl leading-8 font-semibold mb-2">
            ยืนยันตัวเลขผู้ติดเชื้อ{" "}
            <span className="text-[#EA5771]">
              Covid-19</span> ทั้งหมดในประเทศไทย
          </h1>
          <h4 className="flex justify-center items-center gap-1 text-white text-center text-2xl leading-7 font-medium">
            <FcCalendar />
            อัพเดตข้อมูล ณ {updateDate}
          </h4>
        </div>
        <div className="grid md:grid-cols-3 gap-3 mb-20">
          <div className="bg-[#EA5771] text-white p-3 flex-auto rounded-xl shadow-md">
            <div className="p-2">
              <h4 className="text-lg leading-6 font-semibold">
                ผู้ติดเชื้อรายใหม่สะสม
              </h4>
              <h3 className="text-2xl leading-8 font-normal">
                {cards.total_case_excludeabroad}
              </h3>
            </div>
            <hr />
            <div className="p-2">
              <h4 className="text-lg leading-6 font-semibold">เพิ่ม</h4>
              <h3 className="text-2xl leading-8 font-normal flex items-center gap-1">
                <FcPlus />
                {cards.new_case_excludeabroad}
              </h3>
            </div>
          </div>
          <div className="bg-[#D22D36] text-white p-3 flex-auto rounded-xl shadow-md">
            <div className="p-2">
              <h4 className="text-lg leading-6 font-semibold">
                ผู้ป่วยรักษาหายสะสม
              </h4>
              <h3 className="text-2xl leading-8 font-normal">
                {cards.total_recovered}
              </h3>
            </div>
            <hr />
            <div className="p-2">
              <h4 className="text-lg leading-6 font-semibold">เพิ่ม</h4>
              <h3 className="text-2xl leading-8 font-normal flex items-center gap-1">
                <FcPlus />
                {cards.new_recovered}
              </h3>
            </div>
          </div>
          <div className="bg-[#039245] text-white p-3 flex-auto rounded-xl shadow-md">
            <div className="p-2">
              <h4 className="text-lg leading-6 font-semibold">
                ผู้เสียชีวิตสะสม
              </h4>
              <h3 className="text-2xl leading-8 font-normal">
                {cards.total_death}
              </h3>
            </div>
            <hr />
            <div className="p-2">
              <h4 className="text-lg leading-6 font-semibold">เพิ่ม</h4>
              <h3 className="text-2xl leading-8 font-normal flex items-center gap-1">
                <FcPlus />
                {cards.new_death}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
