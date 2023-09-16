import Header from "../components/Header/Header";
import Layout from "../components/UI/Layout";
import CaseDashBoard from "../components/Covid/CaseDashBoard";
import CaseVaccineDashboard from "../components/Covid/CaseVaccineDashboard";
import Top10ProvinceCase from "../components/Covid/Top10ProvinceCase";
import GraphProvinceCaseSelect from "../components/Covid/GraphProvinceCaseSelect";

export default function Page() {
  return (
    <Layout>
      <Header />
      <CaseDashBoard />
      <GraphProvinceCaseSelect />
      <CaseVaccineDashboard />
      <Top10ProvinceCase />
    </Layout>
  );
}
