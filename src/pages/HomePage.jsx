import { useTranslation } from "react-i18next";
import ExampleItems from "../modules/ExampleItems/ExampleItems.jsx";
import { useNavigate } from "react-router-dom";
import { EXAMPLE_TYPE } from "../app/util/constants.js";

const HomePage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const navigateToDemo = (currentTab) => {
    navigate("/examples", { state: { currentTab } });
  };

  return (
    <div>
      <div className="font-MariupolBold text-center text-[24px] leading-[24px]">
        <div className="mt-[40px]">
          {t("Кафедра комп'ютерних систем та мереж")}
        </div>

        <div className="text-center mt-[40px]">
          <img
            src="https://www.uzhnu.edu.ua/uploads/root/logos/UzNU_logo_new2.png"
            className="w-[300px] h-[300px]"
            alt=""
          />
        </div>
        <div className="mt-[40px]">
          {t(
            'Назва дисципліни: "Мультимедійні засоби в комп\'ютерних системах"'
          )}
        </div>
        <div className="mt-[20px]">
          {t(
            'Тема МЕ: "Формати мультимедії, які можуть бути записані через браузер"'
          )}
        </div>
        <div className="mt-[20px]">{t("Виконав Кашуба І.Ф., 2023рік")}</div>
      </div>
      <div className="mt-[50px]">
        <ExampleItems
          audioHandleClick={() => navigateToDemo(EXAMPLE_TYPE.AUDIO)}
          photoHandleClick={() => navigateToDemo(EXAMPLE_TYPE.PHOTO)}
          videoHandleClick={() => navigateToDemo(EXAMPLE_TYPE.VIDEO)}
        />
      </div>
    </div>
  );
};

export default HomePage;
