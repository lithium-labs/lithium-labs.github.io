import "../App.css";
import "../transitions.css";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Logo size={48} className="float" />
      <h1>Lithium Labs</h1>

      <p style={{ marginTop: "20px" }}>{t("description")}</p>
    </div>
  );
};

export default HomePage;
