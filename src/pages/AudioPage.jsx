import { useTranslation } from "react-i18next";
import TitleHeader from "../style/TitleHeader.jsx";
import ImageBrowser from "./../assets/audioBrowserScreen.png";

const AudioPage = () => {
  const { t } = useTranslation();
  return (
    <div className="text-[22px] leading-[24px]">
      <div className="mt-[40px] font-MariupolBold text-center text-[30px] leading-[24px]">
        {t("Аудіо")}
      </div>
      <div className="my-[40px] font-MariupolMedium text-[24px] leading-[30px] text-center">
        {t(
          "Запис аудіо у браузері здійснюється за допомогою формату MPEG-1, аудіофайл може конвертуватись в інші формати, такі як MP3 або WAV, але спочатку він записується тільки з розширенням MPEG-1. Займатись записом медіа файлів через браузер позволяє інструмент UserMedia."
        )}
      </div>
      <TitleHeader title={t("Cімейство MPEG")} />
      <div className="mt-[50px] text-center">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABXFBMVEX///9alJQAAAD//wDm5+dQj49cl5e/0dFdmpogICBWkpLd3d35+fnp6uoeGBhBZmYZGBifvLxSWFd+p6fU1dUfWli0tbXH1dU7XFwlHx4wRUXy8/NHSkpoamoaGhpLjIypqqobExL9WQAgzpSOsbHe5+eEhYVHcnLAwcEh1pqbnJzIysrw8ABUiYm0xcXN0NCPkJB9fn43ODjU0wBeYGAAABfl5QDnUQAYAACUkwC8vAPKyQBrnJxkZABIcXEnLy8XBxIAW0Qek24ANycgxI8fhWcDMCoAOSYcoHYGbU8er4AAT0xYU1U0amk3LjN8lZWnpgAAJCMAGReEgwBTEAAiNzZNSwC2QgAfAAAzNz8nJwAsAAAAHSI0MgB6JwA2T0/aVgCysgMkIwJSEACxRgB5dwCKMQAVGCoWFAA/PwQxMACKigZpaQBRUVwwMkJZWAAUEh5JSAQAACMdGwLcpUrGAAAOQElEQVR4nO2bi3fTRhaHnWtFSJbGCcF1QiZ+pYkdnCiJHZOGADG09LELtCmUdGGXzUI3WwK02Xb//3P2zkiWRtLIjoOz5ey5v3MIEI8lzef7mjvjXI5EIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCTShLRe+qOf4ONTB+5tO3/0Q3xk6tz//Au41yRrUdS5f+PGg8+/Buisu3/0s5xTpfIl36B3/8annwosXwD0yvyS7zYRVeGSb7D0xYMbSEVg+fIrgKX2R28tbQDjcu/Qt+Hrzx8IKgGWjz3glmEO6qOH1Tvb6xe9BZTY9h7c/+bTAMuAyeqVgeaHvd29MkTzBhuMWx02Tmo14warxuqVTRb9ol3hUMnJpzS2VINR/b4EQp3xUISCUs7laxWAP/1Z+FDIZKU2Hag2LMhcDYfpVKvVrs2fY5wYuqm5+vzVO3iJ2sOHD+VVnD6UxdT7s8xBF2/itCv+QMPY2oZO5Pb4Sg//tEdOv61zQ2TADcZZ+RHAlw8iO7lamAo0rXvaQG5taoQKtan52OUyNH0lee3Vq9O1Ar7NfPwJSvym2mvLUNKBdYfl6jjnJdgWL9SlWfTCt5YB4TH81ajgiAPTVYgLDJkYBmPcaX8LX30zYHJlOnrebBu8Op09y4jK5jmYFL5rb6lXnr9TG7xFIHmI12CwlZOhZA3qhoG2UM850BWDO0udLkDkYE35H/y5PRzJOhzuQyqzc+CSiY+l1LwHW9xNMLG+z6roRpuJFEIZycRcUCPnakRkyhNMPnlSwiBRyslZMuhxZw0wJSMT1/XnIV4ZmEVHfPzGOkDfGGYpDjzN53fiHsbqWyxiIrBwDltMXkdhYrayDOU8ZuJD2RzJZEZhcrWmDPeZPOv6TJoOGnKv7hod4St16BoitOQwIDJuOI6PANN1mTvMBnSybCQc7uZP9vO7g6AktAY/QBdhM9cNsTANkykzo0ji5zMTVOHOGEzcOzHUBZ8JOjWsC99xhI+4RlcYfQ9zi4CEeabtoIzBzKBjOGwb3cth+mfHS9w8yu/Dbj6fj1zMhR+Xl/9SFUzE/3icybzK5FhfTZ/XTMTERg2ImPDEYFMysRFBDz9CnmNy4g4gJCZiqYFMuhhXOHOMMsiPD3//hDncR5PF5PkLxLGRf3sLLaUeuFj9r8vLy//8W8BEYGEKk1XVBrxHWtBJMzHjOjewGJPVWoKf2RJMrgu3bzfXB0wMkVTWxA+0k7IAlHMMUZbIi0ivYRhklhCNHkkPNpBJfvdlXsSUdX9U8+/I5DO8KIvikMu1TKwnujSeNBOzNaOo1dJTsTIUMHGnkyZlWgjFtkGWpThD5n/yAsMShgIXg4isUxhrw4AJes02pqZZsJmjXwh0fCRCO0/zr8CQULYHTMI3OZgOsa5NMzEfa5JaykysxUYxUqOxdzyVphIfpKjqM7mWcBzLmzle7F9HJvKhcaJBhEAAMv9iLMWky9HKnwBUBRNXOg8YghX6jtZ52rAzQJKHw/wGdGS6lb7zI/qOEY77ATpYFLEUk6mCrTGT5AdqLdoQV7VlpZlUq7M6+UzitmdaB88axaqNCjwLrWIwx3YVulgkGA4viyCJbg91tA/0JS7z0NwapuQy0zIpw+0QCcaU/Nsj2BKmIGPsXpuxgIkB/1j+bE/PxFpMLajSScdahHpZVbMLM0lLsRZnl+a0Wiqn7nrQb9h2VeKNUkP0CI6Yhsi/YjYOqxiyWJNMXP9D6aKnOekSZQte5VWdvc6fPOeCwxr8BEsi3fgDt38QMVfPxPR6yeumkw4ySd6eV9JMhq281ZRtFgSRWehua2blXx1jhRHECz8PN4XLyKjKxXqnKcak323ArRiSWxhbNtCkxPucdpkZIZO5f8n4sqpjMmVBInxrSlicbjrGJ8nhoOw+p3pT07OFjcwN64qKksQJ8Miph3YiZl4Sv9L4DoeTGJJXGFt280+fu37RK5HEmbhaJuZCPX5hTbGuZZIOOkOYKGZiemgk0B3RA+GMhf/K+UxyAyaCGOdOOu/8fBZDsgP7onbbwIzrV4NSvnFt/yR851lQr1xJfMCFb+MPoylhP9hOnOii5rSIq5WskVmKMXGlGaVc5/nL/K6CZEM40i7Gl7MKFwk5YBI8EXy2vAxtxrVMrH5sKroSVsdkfhwmK4pR9RFJc1wkcSY4PcdhSSS9N4jhMGLy5m7wj9vAZA9M+s7A/EQurvDAbjZTBZm6ENSudDRMVnWBOJOJGTKxjosXQZJgopOo1W6f5vOnAZajl8Hfd/OwLkszV0GCUam+zge+lIoXsYWgYiZRYknkHZfNX9UG4iwmLBqNwWR2bnwkokkwnImxBC8ON0QQQTToQk8H5ewrXPm0mV/NuvFphPHlWoqJshBUko7ZioZ4rZVQ1+5M16b1DpbFJPIzLOxs+yIbCM76+gg7yfH2z3C0L+vXp/lDUELLSY8b6VU0j+JLenHvLYXjFCOy+koFYhYUpXn4l/HuXNMrupC3FyxvLqIRTFAlNKdbG/kdtBalnN2BKjfSPSg/5kpWGqsPF4JKNDG9vfHWv6hChqKLzhRnEyln2kxpOmPqo5lwzuq/w8mGiLUhlF04AZx8+r2SCc9pg6g5M6ivlWiCS7qxmYyU9cxORutaGmEtY/djNBNBhdd/BnSe09MwJZ/kxfo37TxhzF3VJJbC9eCCymteo3guJuOBs2eTSwnN40xnMDmfXKQCL3Y3Bh2D11jIgSjrdQR9h9LXH2v+a0o0Wayeh4nptcaB4jVSzXQNE3PmA/eNXUxCh6IuEan4Lf54iYlnSFNb1z81W/LTi5uJPdp3THNm72AMJljWpwodPZMP3jeuo/ucvMOUg1xu795tDmOi36TwF4KqmRwXZ3upFkni0a2WXSyOxaTVqCYfSM/kwrkplAPv5cIYU/LJ/jtRsWYGI6Uk96LZmAvtlJlAacjkTNPyDp7hYq4xJpPu+ZjUP5hJzrh5JBfGsmfwyzAm0crDWvSixxALQTXpLKCZpFZ5wRN7nncwc9xvFMVirntNBZWhcIi3l+rW6JmM3g8eLRfew35Qy/46hIniOpZ9rFTv3zuqVxVwUeJETMyFvUZMxaIAMgvdeuRw8UZ2TOF9vPSCuFZIkZsQk1w57DCd/XsIE8UWvEZVeYxWU13poJks5VQmxWSrVfT/KqKWD5lk9qiLe6FBmsmKDQ135aDlK7Rg8zi91XshzR1tyFXP2RvghqZAkYotZ4qgLH1MtZKfasgKXGHSWKrE1S4HG+MKk2QjO1SYr63FdOOEgb8bYIch3erD2kSYGLAjFsl3T3eGMIlnFluNqmq/dKZYFUsghUn2B6cwgXJJr9AEzZk0EyMAtxgyMe0JMcn9InqRmI43wNEXbfEattCY7WiLFfFM/kJtbCajewVmI/Wiu+Yriv5ecVLn2tZANA3ESnk9i4mCADMLzjPZc4uZyeSYRDc2FzNnGzIxD4oTO/8IO7dkRHldz2CyohAoYMgw0k1VObm+7SOYHJMofntZGSXyY7FRNNbEh2jurd9HOanougVxJKIAEa69knYeLKzsvnzD5JhEEzZbGSV21BKVXj0hBTulG2BrmahIBmaiWyWHZjJBJgr7rEN00c3Qdbb0Y8ZXCXwkv4kTBMkChceOw2DeDLqiqSgbmckkmSjsa9ojqEp9jZ/J5I43Szt581v+tMeTTOZjHUNrRixn5AupKGt1B2YySSZqF7iWOgiJj6E4VyNd2F1cv+DaWLSX9qHEYgXKd15ij7gR9nbc1M4G4greNkkmqpPW7iSbRpvKkqM/sepEqAz5M9FByb/8lquJZ/Phw8exifftatg8T0RZUY0OUsN4TMyZ4815nVjqPoXaimrHq9fUY4eh605ELpy+CLqyFa7cVBzNVdbAU/2iHX2kiSiLJhS2OMZjguviwpBz1HGDRCpXfFZ8fkU90yVWnxP9xkoHBruC8Kuy6f4QmSgtQoFEqRJiUdZarEa9izGZZGhwjno+Dr8wXauZcq8ocX9bc0roA+TelItjEVNOoDmg4ggmjwMm5lS/asfO8Mf2SsX+S/jKZJgUvmv7RpnuBKf2imTw//AeW0yOaM2evZYbPXfh92a9xEU4iZjIsx/xMlHtm+DCUDm1PRkm0Tlqb8TIKeugcaHN5OEqwdHTN8He8fvb71/ievP3m2LVuSCZWC1xQCjR/1OinyjlokA0ISZhJ3F9RI9fIJlcWR+J9+E3uQP2zkdzC/b3D2H/VPTUTHNhT7QLE7VLFGXjZjJxJrn642Ftb4GkCpmnoz9EWz2As8NX/rb6huhI3jrKi7aO1cLoamu+DxT1ToqxbbqJM8l1jjMPHJtTiwLJZX35zSh3fgV4ffb+3au7/9nZ3YX9w5uW5S3Kg3WayQ2irGg5qsQmzyTXBM/SUTHRSIqXiEQcAePGWn278jzq/rW6Dcxy0NOZJq/5B57NWTv2ULXa4Cj0MCY1M+sAdfwcta8yPGtZSWMx0YTFIbf+ZX5F0mUGY4xzlzFx8Gv7yXV5HNXOSHNuo3gdhWYUcyw3B9d9Damj3Nyj4vWhsmO7NU4X7AUvatOLnaIZ/7TsxDNOUpwNvtDEWAmCjYcsbUNVKmm7MFsNXhhSWz6atYcrsYPVBmjYCweFAnIpeK2FYKeoP+G6JEMu5xINrwBUykMW4EZ3SSr5SfWXAnWHLMu6We36UPX4G3gdqaD6fVvsFcmdIvuyv4KeVukj+x66ODEPvhWKraLe/57IR6lSudnpoirttY/+G/IkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKR/s/0XzRnjVEUqVn9AAAAAElFTkSuQmCC"
          alt=""
          className="w-[500px]"
        />
      </div>
      <div className="mt-[20px]">
        {t(
          "Сімейство форматів MPEG (Moving Picture Experts Group) включає різні стандарти стиснення відео та аудіо. Ось кілька поширених форматів MPEG:"
        )}
      </div>
      <div className="flex items-center mt-[15px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "MPEG-1: Цей стандарт був розроблений для стиснення відео з низькими бітрейтами із помірною якістю зображення. Формат MPEG-1 використовується, наприклад, в відео CD та відео в Інтернеті."
          )}
        </div>
      </div>
      <div className="flex items-center mt-[15px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "MPEG-2: Цей стандарт був розроблений для високоякісного стиснення відео з більш високими бітрейтами, що дозволяє використовувати його для відео трансляцій, DVD, супутникового телебачення тощо. Він підтримує стиснення відео в різних роздільностях та режимах зображення."
          )}
        </div>
      </div>
      <div className="flex items-center mt-[15px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "MPEG-4: Цей стандарт включає багато функціональних можливостей і був розроблений для стиснення відео, аудіо та інших мультимедійних даних з високою якістю. Він підтримує більш широкий спектр можливостей, таких як потокова передача відео в реальному часі, анімація, 3D графіка, аудіосинтез тощо."
          )}
        </div>
      </div>
      <div className="flex items-center mt-[15px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "MPEG-7: Цей стандарт визначає стандартизований набір метаданих для опису мультимедійного вмісту. Він надає структуровану інформацію про вміст, таку як заголовки, описи, ключові слова, авторські права тощо. MPEG-7 допомагає організовувати і пошукові системи та покращує управління мультимедійними даними."
          )}
        </div>
      </div>
      <div className="flex items-center mt-[15px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "MPEG-21: Цей стандарт визначає інформаційну рамку та набір стандартів для керування цифровим контентом. Він надає механізми для управління авторськими правами, захисту вмісту, транзакцій з цифровим"
          )}
        </div>
      </div>
      <div className="my-[25px] text-center">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="w-[500px]"
        />
      </div>
      <TitleHeader title={t("Технічні деталі")} />
      <div className="mt-[40px]">
        {t(
          "Технічно, MPEG-1 використовує методи стиснення, такі як втратне стиснення з використанням DCT (Дискретне косинусне перетворення) та векторного квантування. Відео дані розбиваються на блоки, які піддаються DCT для перетворення з області простору в область частот. Потім значення DCT коефіцієнтів квантується, що дозволяє виконати подальше стиснення. Цей процес призводить до втрати деякої якості відео, але забезпечує значне зменшення обсягу даних.Крім стиснення відео, MPEG-1 також включає методи стиснення аудіо, які базуються на лінійному програшному кодуванні (LPC) та використовують такі алгоритми як амплітудна модуляція з відношенням сигнал/шум (AMR) та дискретне косинусне перетворення (DCT).У браузерах, щоб відтворити відео, закодоване за допомогою MPEG-1, використовується декодер. Декодер отримує стиснені дані MPEG-1, розпаковує їх та відновлює оригінальне відео. Для цього потрібні ресурси процесора та пам'яті.Браузери можуть використовувати вбудовані декодери, які працюють на апаратному рівні, що дозволяє ефективно відтворювати MPEG-1 відео без надмірного навантаження на процесор"
        )}
      </div>

      <TitleHeader title={t("Переваги")} />
      <div className="flex items-center mt-[40px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "Підтримка аудіо: MPEG-1 дозволяє вбудовувати аудіо відповідного формату, такого як MP3, що забезпечує високу якість звуку при стисненні. Це дозволяє створювати відео з аудіо доріжкою високої якості."
          )}
        </div>
      </div>
      <div className="flex items-center mt-[15px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "Компресія з низьким бітрейтом: MPEG-1 дозволяє стиснути відео з низьким бітрейтом, що забезпечує менший розмір файлу при прийнятній якості зображення. Це робить його ідеальним для передачі відео через обмежені канали передачі даних, такі як Інтернет з низькою швидкістю або на старіші пристрої з обмеженою ємністю."
          )}
        </div>
      </div>
      <div className="flex items-center mt-[15px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "Простота використання: Формат MPEG-1 має просту структуру та декодування, що робить його легким у використанні для розробників і користувачів. Доступність кодеків та програмного забезпечення для роботи з MPEG-1 також сприяє його популярності та поширеності."
          )}
        </div>
      </div>
      <div className="flex items-center mt-[15px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "Підтримка DVD-відео: MPEG-1 є одним з форматів, які підтримуються на DVD-відео. Це дозволяє створювати DVD-диски з відео, що можуть бути відтворені на DVD-програвачах."
          )}
        </div>
      </div>
      <TitleHeader title={t("Недоліки")} />
      <div className="flex items-center mt-[40px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "Обмежена якість звуку: Хоча MPEG-1 може підтримувати аудіо стиснення формату MP3, якість звуку може бути обмеженою, особливо при низькому бітрейті. Це може призводити до втрати деталей звуку та артефактів при стисненні."
          )}
        </div>
      </div>
      <div className="flex items-center mt-[15px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "Обмежена підтримка каналів: MPEG-1 обмежений у підтримці багатоканального звуку. Він підтримує стерео звук (два канали), але не підтримує більш складні аудіоформати з багатьма каналами, такі як 5.1 або 7.1 звукові системи."
          )}
        </div>
      </div>
      <div className="flex items-center mt-[15px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "Високий бітрейт для високої якості: Для досягнення високої якості звуку у форматі MPEG-1 необхідний високий бітрейт, що призводить до більшого розміру аудіофайлу. Це може бути проблематичним при передачі або збереженні файлів з аудіо високої якості."
          )}
        </div>
      </div>
      <div className="flex items-center mt-[15px]">
        <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
        <div>
          {t(
            "Відсутність додаткових функцій: MPEG-1 не має підтримки додаткових функцій, таких як просторовий звук, ефекти обробки звуку, підтримка низької латентності тощо. Це обмежує можливості обробки та покращення якості звуку у форматі MPEG-1."
          )}
        </div>
      </div>
      <TitleHeader title={t("Підтримка браузерами")} />
      <div className="mt-[40px] text-center">
        <img src={ImageBrowser} className="max-w-[100%]" alt="" />
      </div>

      <TitleHeader title={t("Співвідношення MPEG-1 і MP3")} />
      <div className="mt-[40px]">
        {t(
          "Формат MPEG-1 включає в себе декілька різних частин, зокрема MPEG-1 Part 3, який використовується для ущільнення аудіо.MP3 (MPEG-1 Audio Layer III) - це формат аудіокодека, який використовує стандарт MPEG-1 Part 3 для ущільнення аудіо-даних. MP3 був розроблений з метою створення аудіофайлів меншого розміру, зберігаючи якість звуку близької до безвтратної.Основна відмінність між MPEG-1 і MP3 полягає в тому, що MPEG-1 - це стандарт компресії аудіо та відео, тоді як MP3 - це конкретний формат аудіокодека, який використовує MPEG-1 Layer 3 для ущільнення аудіоданих. Крім того, MP3 був розроблений спеціально для створення аудіофайлів меншого розміру, тоді як MPEG-1 може використовуватись як для ущільнення аудіо, так і для відео."
        )}
      </div>
    </div>
  );
};

export default AudioPage;
