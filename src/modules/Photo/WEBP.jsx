import { useTranslation } from "react-i18next";
import { Anchor } from "antd";
import TitleHeader from "../../style/TitleHeader.jsx";
import TableImage from "./../../assets/table.png";
import WebmCodeImage from "./../../assets/WebmCode.png";

const WEBP = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-[50px] text-[19px] leading-[22px]">
      <div className="anchor-container mb-[20px] bg-int-gray-main rounded-2xl w-[100%]">
        <Anchor
          className="left-[30px]"
          direction="horizontal"
          style={{ color: "red" }}
          items={[
            {
              key: "part-1",
              href: "#part-1",
              title: t("Необхідність у нових форматах"),
            },
            {
              key: "part-2",
              href: "#part-2",
              title: t("Ступінь стиску"),
            },
            {
              key: "part-3",
              href: "#part-3",
              title: t("Підтримка браузерами"),
            },
            {
              key: "part-4",
              href: "#part-4",
              title: t("Недоліки"),
            },
            {
              key: "part-5",
              href: "#part-5",
              title: t("Порівняння"),
            },
          ]}
        />
      </div>

      <TitleHeader title={t("Необхідність у нових форматах")} id="part-1" />

      <div className="flex mt-[50px]">
        <img
          src="data:image/png;base64,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"
          alt="#"
          className="mr-[30px]"
        />
        <div className="text-int-white-main text-[20px]">
          <div>
            {t(
              "Протягом останніх 25 років JPEG був найбільш широко підтримуваним форматом для інтернет графіки. JPEG є форматом стиснення із втратами. Хоча швидкість декодування файлів JPEG є відмінною, їй не вистачає інших функцій, необхідних для зображень на сучасних веб-сайтах. JPEG не підтримує прозорість зображень, анімації, карти глибини кольору або можливість накладання шарів. JPEG найкраще працює із фотографіями. PNG є форматом без втрат і може підтримувати альфа-прозорість, але досягнуте стиснення, особливо для фотографій, значно нижче. JPEG та PNG широко використовуються в залежності від типу потрібного зображення.Таким чином, метою сучасних форматів зображень є подолання обмежень JPEG та PNG, пропонуючи найкраще стиснення та гнучкість для підтримки інших сучасних функцій. Зважаючи на таку необхідність і виникли формати WEBP та AVIF, які зараз активно впроваджуються на різних сайтах."
            )}
          </div>
        </div>
      </div>

      <TitleHeader title={t("Ступінь стиску")} id="part-2" />

      <div className="mt-[40px]">
        {t(
          "Формат WEBP був створений Google у 2011 році як формат зображень, який допоможе зробити Інтернет швидше. За минулі роки він набув широкого поширення через його здатність стискати зображення до файлів меншого розміру порівняно з JPEG та PNG. WEBP пропонує стиснення без втрат і з втратами з прийнятною візуальною якістю та підтримує прозорість та анімацію альфа-каналу.Зображення WEBP без втрат зазвичай на третину менше, ніж PNG, а зображення WEBP із втратами на 40 відсотків менше, ніж зображення JPEG аналогічної якості. Підтримка анімації також робить їх чудовою заміною зображень у форматі GIF.Для порівняння нижче представлені два фото у різних форматах: ліворуч стандартний JPG, праворуч новий формат WEBP."
        )}
      </div>

      <div className="flex justify-center items-center my-[15px] max-w-[1000px] m-auto">
        <img
          src="https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg"
          alt="#"
          className="mr-[20px] w-[728px]"
        />
        <img
          src="https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001webp.webp"
          alt="#"
          className="w-[728px]"
        />
      </div>

      <div className="flex justify-center items-center my-[15px]">
        <img
          src="https://web24.com.ua/wp-content/uploads/2021/10/tema-06-004jpg.jpg"
          alt="#"
          className="mr-[20px]"
        />
        <img
          src="https://web24.com.ua/wp-content/uploads/2021/10/tema-06-004webp.webp"
          alt="#"
        />
      </div>
      <div className="mt-[40px]">
        {t(
          "Крім хорошого стиснення, WEBP має інші незаперечні переваги, такі як"
        )}
      </div>

      <div className="mt-[20px]">
        {t(
          "Прозорість - WEBP має 8-бітний канал прозорості без втрат, у якому лише на 22% більше байтів, ніж у PNG. Він також підтримує прозорість RGB із втратами, що є унікальною функцією WEBP."
        )}
      </div>

      <div className="mt-[20px]">
        {t(
          "Додаткові метадані - Формат файлу WEBP підтримує метадані фотографій EXIF ​​та метадані цифрових документів Extensible Metadata Platform (XMP). Він також може містити колірний профіль ICC."
        )}
      </div>

      <div className="mt-[20px]">
        {t(
          "Анімація - Формат WEBP підтримує повнокольорові анімовані зображення."
        )}
      </div>

      <TitleHeader title={t("Підтримка браузерами")} id="part-3" />

      <div className="mt-[40px]">
        {t(
          "За останні пару років різні інтернет-браузери та програми стали підтримувати WEBP і розробили безліч інструментів для створення, перегляду та завантаження файлів WEBP. Сьогодні WEBP підтримується в останніх версіях майже всіх основних браузерів."
        )}
      </div>

      <div className="text-center mt-[20px]">
        <img
          src="https://web24.com.ua/wp-content/uploads/2021/10/tema-06-003.jpg"
          alt=""
        />
      </div>
      <div className="mt-[20px]">
        {t(
          "Якщо розробники захочуть використовувати WEBP на своїх сайтах, вони можуть це зробити за допомогою елемента як показано нижче. Таким чином, якщо браузер не підтримує новий формат, то замість нього відобразить зображення у форматі JPG."
        )}
      </div>
      <div className="text-center">
        <img src={WebmCodeImage} alt="" />
      </div>
      <div className="mt-[20px]">
        {t(
          "CDN також підтримують адаптивні зображення з автоматичним вибором формату для зображень WEBP або AVIF залежно від підтримки браузера. Плагіни WEBP доступні для інших популярних CMS, таких як WordPress, Joomla, Drupal та ін. Початкова підтримка WEBP також доступна у самому ядрі WordPress, починаючи з версії 5.8."
        )}
      </div>

      <TitleHeader title={t("Недоліки")} id="part-4" />

      <div className="mt-[40px]">
        {t(
          "Спочатку істотним недоліком WEBP була відсутність підтримки браузера і належного інструментарію. При розгляді всіх функцій, які в ідеалі має підтримувати сучасний формат, як і раніше, є кілька суттєвих зауважень."
        )}
      </div>
      <div className="flex mt-[10px]">
        <img
          src="https://web24.com.ua/wp-content/uploads/2021/08/homaka3.png"
          alt=""
        />
        <div className="ml-[10px]">
          {t(
            "WEBP обмежений 8-бітною точністю кольору. В результаті він не може підтримувати зображення HDR/з широкою гамою кольорів."
          )}
        </div>
      </div>

      <div className="flex mt-[15px]">
        <img
          src="https://web24.com.ua/wp-content/uploads/2021/08/homaka3.png"
          alt=""
        />
        <div className="ml-[10px]">
          {t(
            "WEBP не підтримує зображення із втратами кольору. Це може вплинути на зображення із дрібними деталями, хроматичними текстурами або кольоровим текстом."
          )}
        </div>
      </div>

      <div className="flex items-start mt-[15px]">
        <img
          src="https://web24.com.ua/wp-content/uploads/2021/08/homaka3.png"
          alt=""
        />
        <div className="ml-[10px]">
          {t(
            "Формат не підтримує прогресивне декодування. В ідеалі ви можете створювати файли WEBP із доступних вихідних файлів найвищої якості. Перетворення неякісних файлів JPEG на файли WEBP не дуже ефективно, оскільки стискається двічі."
          )}
        </div>
      </div>

      <TitleHeader title={t("Порівняння")} id="part-5" />

      <div className="mt-[40px]">
        {t(
          "Cтупінь стиснення фотографічних та нефотографічних зображень може також відрізнятися залежно від точності (якості) зображень. Тут ми зазначили загальний бал. Загалом формат WEBP краще підтримує та пропонує краще стиснення порівняно з JPEG або PNG. Таким чином, застосовувати новий формат на сайті можна, але з обережністю, тому що він підтримується далеко не всіма браузерами."
        )}
      </div>
      <div className="my-[20px] text-center">
        <img
          src="	https://web24.com.ua/wp-content/uploads/2021/10/tema-06-007.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default WEBP;
