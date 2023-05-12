import { useState } from "react";
import { useTranslation } from "react-i18next";
import MediaInfoTabs from "../components/MediaInfoTabs/MediaInfoTabs.jsx";
import Jpeg from "../modules/Photo/JPEG.jsx";
import PNG from "../modules/Photo/PNG.jsx";
import Gif from "../modules/Photo/GIF.jsx";
import WEBP from "../modules/Photo/WEBP.jsx";

const tabsOptions = [
  { label: "JPEG", key: 1 },
  { label: "PNG", key: 2 },
  { label: "GIF", key: 3 },
  { label: "WEBP", key: 4 },
];

const PhotoPage = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState(1);

  const onTabChange = (tabNumber) => {
    setCurrentTab(tabNumber);
  };

  return (
    <div>
      <MediaInfoTabs
        onTabChange={onTabChange}
        tabsOptions={tabsOptions}
        mainText={t("Фото")}
        secondaryText={
          <div id="part-1">
            <div className="text-int-white-main opacity-[0.9]">
              {t(
                "Вибір правильного формату фото має важливе значення з кількох причин:\n" +
                  "\n" +
                  "Якість зображення: Різні формати мають різні рівні стиснення і якості зображення. Наприклад, JPEG забезпечує хорошу якість при відносно невеликому розмірі файлу, що є важливим для фотографій з високою роздільною здатністю. З іншого боку, PNG забезпечує безвтратне стиснення і кращу точність передачі кольору, що корисно для графіки з прозорістю. Важливо збалансувати якість зображення і розмір файлу, оскільки великі розміри файлів можуть сповільнити завантаження сторінок.\n" +
                  "\n" +
                  "Прозорість: Якщо вам потрібна прозорість у зображенні, наприклад, для логотипів або графіки з прозорим фоном, вибір формату, який підтримує прозорість, такий як PNG, буде важливим. JPEG не підтримує прозорість, тому для цих випадків він не є найкращим варіантом.\n" +
                  "\n" +
                  "Анімація: Якщо ви хочете відтворювати анімацію на своєму веб-сайті, GIF може бути відмінним варіантом, оскільки він підтримує послідовність зображень.\n" +
                  "\n" +
                  "Підтримка браузерами: Важливо також враховувати, які формати підтримуються різними браузерами. Більшість сучасних браузерів підтримують JPEG, PNG і GIF. Однак, нові формати, такі як WebP і AVIF, можуть не бути підтримані у всіх браузерах. Тому вибір формату також залежить від цільової аудиторії вашого веб-сайту."
              )}
            </div>
          </div>
        }
      />
      <div>{currentTab === 1 && <Jpeg />}</div>
      <div>{currentTab === 2 && <PNG />}</div>
      <div>{currentTab === 3 && <Gif />}</div>
      <div>{currentTab === 4 && <WEBP />}</div>
    </div>
  );
};

export default PhotoPage;
