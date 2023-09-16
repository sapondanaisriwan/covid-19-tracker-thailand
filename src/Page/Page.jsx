import Header from "../components/Header/Header";
import Layout from "../components/UI/Layout";
import CaseDashBoard from "../components/Covid/CaseDashBoard";
import CaseVaccineDashboard from "../components/Covid/CaseVaccineDashboard";

export default function Page() {
  return (
    <Layout>
      <Header />
      <CaseDashBoard />
      <CaseVaccineDashboard />
    </Layout>
  );
}
