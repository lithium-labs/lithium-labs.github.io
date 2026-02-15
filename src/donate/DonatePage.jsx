import "../App.scss";
import "./Donate.scss";
import "../transitions.css";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";

const DonatePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Logo size={96} className="float" />
      <h1>Lithium Labs</h1>

      <p style={{ marginTop: "20px" }}>{t("donate-inner")}</p>
      <a href="https://www.buymeacoffee.com/lithium" target="_blank" id="coffee">
        <img
          src="/white-lithium.png"
          alt="Buy Me A Coffee"
        />
      </a>
    </div>
  );
};

export default DonatePage;
