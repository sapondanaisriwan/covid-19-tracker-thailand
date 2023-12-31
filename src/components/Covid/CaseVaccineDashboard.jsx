import AOS from 'aos';
import 'aos/dist/aos.css';
import { url_national_vaccination } from "../../api/covid_urls";
import useFetch from "../hooks/useFetch";
import { useEffect } from 'react';

import { FcPlus, FcCalendar } from "react-icons/fc";

export default function CaseVaccineDashboard() {
  const [data] = useFetch(url_national_vaccination);

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  const getVaccineData = {
    data: data ? data.slice(-2) : null,
    formatNumber: function (number) {
      return number ? number.toLocaleString() : 0;
    },
    prevData: function () {
      return this.data && this.data[0];
    },
    newData: function () {
      return this.data && this.data[1];
    },
    getFirstDoes: function () {
      return [
        this.formatNumber(this.newData()?.first_dose),
        this.formatNumber(this.newData()?.first_dose - this.prevData()?.first_dose)
      ];
    },
    getSecondDose: function () {
      return [
        this.formatNumber(this.newData()?.second_dose),
        this.formatNumber(this.newData()?.second_dose - this.prevData()?.second_dose)
      ];
    },
    getThirdDoes: function () {
      return [
        this.formatNumber(this.newData()?.third_dose),
        this.formatNumber(this.newData()?.third_dose - this.prevData()?.third_dose)
      ];
    },
    getTotalDoes: function () {
      return [
        this.formatNumber(this.newData()?.total_doses),
        this.formatNumber(this.newData()?.total_doses - this.prevData()?.total_doses)
      ]
    },
    getDate: function () {
      return this.newData()?.date || "วันนี้";
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-5xl mx-auto w-full p-4" data-aos="fade-right">
        <div className="p-4 mt-12 mb-6">
          <h1 className="text-gray-900 text-center text-3xl leading-8 font-semibold mb-2">
            รายงานซีนข้อมูลการฉีดวัคซีน
          </h1>
          <h4 className="flex items-center gap-1 justify-center text-gray-900 text-center text-2xl leading-7 font-medium">
            <FcCalendar />
            อัพเดตข้อมูล ณ {getVaccineData.getDate()}
          </h4>
        </div>
        <div className="grid md:grid-cols-4 gap-3 mb-4">
          <div className="bg-white text-white p-3 flex-auto rounded-xl shadow-md">
            <div className="p-2">
              <h4 className="text-lg text-gray-900 leading-6 font-semibold">เข็มที่ 1</h4>
              <h3 className="text-2xl text-gray-900 leading-8 font-normal">
                {getVaccineData.getFirstDoes()[0]}
              </h3>
            </div>
            <hr />
            <div className="p-2">
              <h4 className="text-lg text-gray-900  leading-6 font-medium">
                เพิ่ม</h4>
              <h3 className="text-2xl text-gray-900 leading-8 font-normal flex items-center gap-1">
                <FcPlus />
                {getVaccineData.getFirstDoes()[1]}
              </h3>
            </div>
          </div>
          <div className="bg-white text-white p-3 flex-auto rounded-xl shadow-md">
            <div className="p-2">
              <h4 className="text-lg text-gray-900 leading-6 font-semibold">เข็มที่ 2</h4>
              <h3 className="text-2xl text-gray-900 leading-8 font-normal">
                {getVaccineData.getSecondDose()[0]}
              </h3>
            </div>
            <hr />
            <div className="p-2">
              <h4 className="text-lg text-gray-900  leading-6 font-semibold">เพิ่ม</h4>
              <h3 className="text-2xl text-gray-900 leading-8 font-normal flex items-center gap-1">
                <FcPlus />
                {getVaccineData.getSecondDose()[1]}
              </h3>
            </div>
          </div>
          <div className="bg-white text-white p-3 flex-auto rounded-xl shadow-md">
            <div className="p-2">
              <h4 className="text-lg text-gray-900 leading-6 font-semibold">เข็มที่ 3</h4>
              <h3 className="text-2xl text-gray-900 leading-8 font-normal">
                {getVaccineData.getThirdDoes()[0]}
              </h3>
            </div>
            <hr />
            <div className="p-2">
              <h4 className="text-lg text-gray-900  leading-6 font-semibold">เพิ่ม</h4>
              <h3 className="text-2xl text-gray-900 leading-8 font-normal flex items-center gap-1">
                <FcPlus />
                {getVaccineData.getThirdDoes()[1]}
              </h3>
            </div>
          </div>
          <div className="bg-white text-white p-3 flex-auto rounded-xl shadow-md">
            <div className="p-2">
              <h4 className="text-lg text-gray-900 leading-6 font-semibold">ทั้งหมด</h4>
              <h3 className="text-2xl text-gray-900 leading-8 font-normal">
                {getVaccineData.getTotalDoes()[0]}
              </h3>
            </div>
            <hr />
            <div className="p-2">
              <h4 className="text-lg text-gray-900  leading-6 font-semibold">เพิ่ม</h4>
              <h3 className="text-2xl text-gray-900 leading-8 font-normal flex items-center gap-1">
                <FcPlus />
                {getVaccineData.getTotalDoes()[1]}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
