import Logo from "./../../../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "../../../components/LanguageSwitcher/LanguageSwitcher.jsx";
import { useTranslation } from "react-i18next";
const MainHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="h-[theme(spacing.header-height)] bg-int-gray-main text-int-white-main px-[30px]">
      <div className="max-w-container-size h-[100%] w-[100%] m-auto flex items-center font-MariupolBold">
        <div>
          <Link to="/">
            <img src={Logo} alt="#" className="w-[40px] h-[40px]" />
          </Link>
        </div>
        <div className="flex items-center justify-between w-[100%]">
          <nav className="ml-[100px] flex items-center text-[18px]">
            <NavLink to="/photo" className="mr-[30px]">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive
                      ? "text-int-white-main"
                      : "text-int-white-secondary"
                  }`}
                >
                  {t("Фото")}
                </div>
              )}
            </NavLink>

            <NavLink to="/video" className="mr-[30px]">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive
                      ? "text-int-white-main"
                      : "text-int-white-secondary"
                  }`}
                >
                  {t("Відео")}
                </div>
              )}
            </NavLink>

            <NavLink to="/audio" className="mr-[30px]">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive
                      ? "text-int-white-main"
                      : "text-int-white-secondary"
                  }`}
                >
                  {t("Аудіо")}
                </div>
              )}
            </NavLink>
          </nav>
          <div className="flex items-center text-[18px]">
            <NavLink to="/examples" className="mr-[30px]">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive
                      ? "text-int-white-main"
                      : "text-int-white-secondary"
                  }`}
                >
                  {t("Приклади")}
                </div>
              )}
            </NavLink>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
