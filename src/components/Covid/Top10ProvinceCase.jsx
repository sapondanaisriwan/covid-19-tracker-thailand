import { url_today_cases_by_provinces } from "../../api/covid_urls"
import useFetch from "../hooks/useFetch"

export default function Top10ProvinceCase() {
  const data = useFetch(url_today_cases_by_provinces)
  const dataInfo = {
    getTop10: data[0] && data[0].sort((a, b) => b?.total_case - a?.total_case).slice(1, 11),
  }
  const formatNumber = (number) => (number ? number.toLocaleString() : 0);

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto w-full p-4">
        <div className="p-4 mt-12 mb-4">
          <h1 className="text-gray-900 text-center text-3xl leading-8 font-semibold">
            10 อันดับจังหวัดที่มียอดผู้ติดเชื้อมากที่สุด
          </h1>
        </div>
        <div className="text-gray-900 max-w-2xl mx-auto mb-8 overflow-hidden">
          <table className="table-auto border-separate border-spacing-0 w-full border border-slate-400 bg-white text-sm shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                <th className="border border-slate-300 font-semibold p-4 text-slate-900 text-left">
                  จังหวัด
                </th>
                <th className="border border-slate-300 font-semibold p-4 text-slate-900 text-left">
                  ผู้ติดเชื้อสะสม
                </th>
                <th className="border border-slate-300 font-semibold p-4 text-slate-900 text-left">
                  เสียชีวิตสะสม
                </th>
              </tr>
            </thead>
            <tbody>
              {dataInfo.getTop10 &&
                dataInfo.getTop10.map(({ province, total_case, total_death }, index) => {
                  return (
                    <tr key={index}>
                      <td className="border border-slate-300 p-4 text-slate-500">
                        {province}
                      </td>
                      <td className="border border-slate-300 p-4 text-slate-500">
                        {formatNumber(total_case)}
                      </td>
                      <td className="border border-slate-300 p-4 text-slate-500">
                        {formatNumber(total_death)}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
