import { useTranslation } from "react-i18next";
import TitleHeader from "../style/TitleHeader.jsx";

const VideoPage = () => {
  const { t } = useTranslation();
  return (
    <div className="text-[22px] leading-[24px]">
      <div className="mt-[40px] font-MariupolBold text-center text-[30px] leading-[24px]">
        {t("Відео")}
      </div>
      <div className="my-[40px] font-MariupolMedium text-[24px] leading-[30px] text-center">
        {t(
          "Запис відео у браузері здійснюється за допомогою формату WEBM, відеофайл може конвертуватись в інші формати, такі як MP4 або Ogg, але спочатку він записується тільки з розширенням WEBM. Займатись записом медіа файлів через браузер позволяє інструмент UserMedia."
        )}
      </div>
      <TitleHeader title="getUserMedia" />
      <div className="flex items-start mt-[40px]">
        <div className="mr-[30px]">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="w-[500px]"
          />
        </div>
        <div>
          {t(
            "getUserMedia (MediaDevices.getUserMedia) є API веб-переглядача, яке дозволяє веб-додаткам отримувати доступ до медіа пристроїв користувача, таких як камера та мікрофон. Це дає можливість отримувати стріми аудіо та відео з цих пристроїв, щоб використовувати їх для зйомки відео, розпізнавання обличчя, звукового вводу та інших сценаріїв веб-додатків.За допомогою getUserMedia, веб-додатки можуть запитати в користувача дозвіл на доступ до камери та мікрофона пристрою. Якщо користувач надає дозвіл, то додаток може отримувати медіа стріми та працювати з ними.Це дозволяє створювати веб-додатки, які можуть проводити відеоконференції, реалізовувати фотозйомку через камеру, розпізнавати обличчя, записувати аудіо, використовувати аналіз звуку та багато інших мультимедійних функцій.Однак важливо пам'ятати, що доступ до медіа пристроїв, як камери та мікрофона, потребує дозволу користувача. Користувач має можливість надати або відхилити доступ до своїх медіа пристроїв під час використання веб-додатку."
          )}
        </div>
      </div>
      <div className="text-center mt-[30px]">
        <img
          src="http://dev.w3.org/2011/webrtc/editor/images/change_states_before.png"
          alt=""
        />
      </div>
      <TitleHeader title={t("Основа")} />
      <div className="mt-[40px]">
        {t(
          "WebM є відео кодеком, який використовується для стиснення відео з метою зменшення розміру файлу і підвищення швидкості передачі в мережі Інтернет. Він використовує відкритий кодек відео VP8 та відкритий кодек аудіо Vorbis, що робить його доступним для використання безкоштовно та без обмежень.WebM підтримує високу якість відео та звуку з мінімальними втратами якості відносно оригінального відео. Крім того, він підтримує багатофайловий контейнер, що дозволяє зберігати відео та аудіо дані в одному файлі.WebM є відкритим форматом, тобто його розробка відбувається в рамках відкритої групи, яка складається з представників різних компаній та організацій. Це дозволяє розробляти формат шляхом співпраці та взаємодії громадськості, що підвищує його розповсюдження та розвиток.WebM є популярним форматом для відео на веб-сайтах та підтримується більшістю веб-браузерів, таких як Google Chrome, Mozilla Firefox, Microsoft Edge та інші."
        )}
      </div>
      <TitleHeader title={t("Основні характеристики")} />
      <div className="mt-[40px]">
        <div className="flex items-center">
          <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
          <div>
            {t(
              "Компресія відео: WebM використовує відеокодек VP8 або VP9 для стиснення відео. Ці кодеки забезпечують ефективну стискаючу алгоритміку, що дозволяє знизити розмір відеофайлу без значної втрати якості."
            )}
          </div>
        </div>
        <div className="flex items-center mt-[15px]">
          <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
          <div>
            {t(
              "Компресія аудіо: WebM використовує аудіокодек Opus або Vorbis для стиснення аудіо. Ці кодеки забезпечують високу якість звуку при мінімальному розмірі файлу."
            )}
          </div>
        </div>
        <div className="flex items-center mt-[15px]">
          <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
          <div>
            {t(
              "Контейнер: WebM визначає структуру контейнера файлів, яка об'єднує відео та аудіо дані в один файл. Цей контейнер забезпечує синхронізацію відео та аудіо шляхів, що дозволяє відтворювати їх одночасно."
            )}
          </div>
        </div>
        <div className="flex items-center mt-[15px]">
          <div className="w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full bg-int-grapefruit mr-[8px]" />
          <div>
            {t(
              "Висока якість та ефективність: WebM забезпечує високу якість відео при зменшеному об'ємі файлу. Це робить його особливо корисним для потокової передачі відео в мережі з обмеженими пропускною здатністю та ресурсами."
            )}
          </div>
        </div>
      </div>
      <div className="text-center">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYSEhISEhIYEhISHRwREhIRGhISEhISGBUZGRgUGBgcIS4lHB4rHxgYJjgmLS8xNzU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHz8sISw/Pz86NzoxNDQxOD86PT80PTVAMTQ0MTQxNDE/MTQ6NDc0PTQ0NjE/NEA0NDQ0PTY0NP/AABEIALQBFwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EAEYQAAIBAgIEBwwHBwQDAAAAAAECAAMEERIFITFRBhM0QWFxchQiJDJigYKRobGysxUjUlNzktEWM0KDwtLhRISio1RVY//EABoBAQADAQEBAAAAAAAAAAAAAAABAwUEAgb/xAAoEQEAAgIBAwQBBAMAAAAAAAAAAQIDEQQSFFETITFhgQVBUqEiMjP/2gAMAwEAAhEDEQA/APs0REBERAREQE03FZaaPUdgqIC7sdgVRiWPUBN0r+m/Ca1KxGtDhc3f4CN3lM9txh0qjwOCy4QXbVMGs1YOguaaI4p3AoMSACr96zr3uYZlwLrq1yUocJ7csEqs1tUOoU7tWoMTuVm71vRJmWn6LBEuaalqtqTVCr41SkRhVpdOZdYH2lXdO/6u4pAkLVpVFDDMA6MrDEHA6iMDA6FOOsawdhEykB+zFOnrtKlSzO3LQbGjj00WxT1ATw1b+h41OleoOeke5q+HYclGPpLAsESDo8KKGYJWLWlQ6gl2po4ncrnvH9FjJlWBAIOIOsEawRAziIga6tQKrMdQUFidwAxMj9G6T45mVk4tgq1AM2bFWx26hgw5xrGsazOjSvJ6/Yf4DIfQvKSP/l/WsCyREQEREBERAREQEREBERAREQEREBERAREQEREBERA0XdytKm9WocqU1Lsx2BVGJMjODts4R7iquWvdNx1RTtpphhSo+imAPlFjzzTpbwm4pWY100y3N30orfU0j2nUseimRzywQEgtDnuetVszqTXc2v4Lt9ZTHYc+ZaiCTshuEFBsi3FJS1a1PHIo21EwwqUfSTEDygp5oEzE0WlylWmlVGDJUUOjDYysMQfUZvgaq1JXUqyhlOoqwDKesGQrcF6SEtavUs22+DNhTJ6aLAofyiT8QK9m0hQ8ZaN8g50xtbjDsnMjHzrM6fCigGCV89o51BLtDSBPk1NaN5mMnprq0wylWUMp1FWAZSNxB2wOPSjhrWuykMppuQQQQRkOsGReh+Vn8I/Gs1aU4M0Uo16lvntmCOzLbM1OlU7wkq9LWhB6sde2aEr1kuQ1Citc5GzIXFJsmZNaEggnHDUcOuBcIkAnCmipC3K1LNzqwukNNCeiqMUP5pN06gcBlYMp1gqQQRvBEDZERAREQEREBERAREQEREBERAREQEREBERATl0heJQpPWqHKlNS7noUY6t56J1Sv6S8KuqdqNdKhlurrczA+D0T1spcjdTX7UDo4PWrpTarWGFxctx9YbchIASljuRAq9YJ55MREBERAgdE+D3FWzOpGxurXdxbN9bSHYdsezUUc0npDcIrV2prWormuLVuPpKNtTAEPR9NCy9ZB5pIWV2tanTq0zmSoodDvVhiPPA6YiICIiBw6b5Nc/h1PgMidFcs/lN8dOSunOS3P4b/AANInRfLB+E/x0oFhdAwIYBgdRBAII6QZC1OC1AEvbl7NzrLWjGmpPlU9aN51k9ECvZb+hsNK+UczeC3GHWMyMfMs9ThTSQhbpKlk51eFLlpE9FZcaZ/NLBMHQMCCAQdRB1gjcRAxo1VdQyMGU6wykMp6iJtkBW4K2+YvQD2lQ6y9mxo4nykHeN51Mx4u/oeK9K+Qc1Qdy1/zqCjH0VgWGJXl4U00IW7p1bNtmNwv1RPRWXFPWRJu3rrUUNTdXU7GQhlPURqgboiICIiAiIgIiICIiAiIgIiIHHpO9S3o1K1THLTBcga2O5VHOScABvInJwdsWpUi1XlFwxuLg7cKjAYID9lFCoOhJy33hV5Ttxro2mW5uNzVz+4pHq11D1JvlggexEQEREBIDRZ7muqtqdVOrmurXcMW+vpDqdg4G6p0SfkPwhs2qUhUpDG4t27ooc2ZlBDUydzoWT0geaBMROTR94telTrIcUqAOuOo4EbCOYjYRvE64CIiBH6d5Lc/hv8BkVozlo/Cf46UltOcluOw/wmRGjOWr+E/wAdKBZoiICIiAiIgYMoIIIxB1EHXiJVuEOiLe3pVLmmrW9bUqdyO1BqtZjlRCq96xZiBrBlqJlcaqt1fAFhxFh32sjB7x11deRG9dTokTMQab+DV3VK1La6YNdWxAdgABVpuMyVQBzHWp6UMnZXNOsKVWhe0zmNM8RcInfM9s7DEgDWSj5X6s++WBagOwg9RBjcSnUtkRElBERAREQEREBERA8nDpXSC21GpWfWEGIUeM7HUqDpZiAOud0punbw1bxKakGlZ5arjaGuWB4tTvyqQ3Wyzxe8UjcomdQltA0WoUvrBmr1WNa4YHxqz62A6FGCjoUST7q8n2yunSb+T6v8zz6TfyfVOHuvt49SFj7q8n2x3V5Ptlb+lH8n1Tz6VfyfVHd/Z6kLL3V0e2O6vJ9srP0s/k+qYnTD+T6o7v7PUhaO6vJ9sd1eT7ZVTpp/J/L/AJmJ03U5gvnH+ZHex5/o9SEpRZbFLmozfUMxrJTwwNN31uinnDPiwGAwLHmk9SfMqthhmAOG7EYz5bwhvnrMquwyquIVdS5iSM3SZ9H0RdrWoUqtM4oygg7sNRB6QQQeqXcbPOW0+Ie6zuNu+IidiXBpvk1fsN7pD6NPhqfhP8dOS+nOTVuyRIfR3Laf4b/EkC0REQEREBERArfCrShpU2CjFtSqvPUqNqRB0EkY9GMi9G2fE0lpk5m1tUf7dRji7eck+yeaSqCvfuQcadn3o3NcsozH0VOHW53Te1SZXJnd5iZaXHx/4xMNd5X4tC2GPMB0nZOzgXeBhWQtjUDCqw8lxlUjoxQj1SI0s2NI9Y98w0YDRpLfoD4M7LcAbWtHVOM1c5UhXHZbfI4n/X2WcqsRg39vokTBGBAIOIOsEawQdhmc1mSREQEREBERAREQI/TOkBbUHqkZmUZUQbalViFSmOlmKjzyp1LI2wSm7ZqrLx1d/t13dmdurHUOhRJThjom4uBQNs4U0WaoULZCz5cEZWwIBXFto/ixxBErqWN3TB463uKjYk5i6XJwwGw5ycNurCc3KraceqxuXi8TMezpNSYGpON7hl8e3uV7VCth6ws1NpJB4wde1TqL71mV6Gb+Mqem3hIGpMS5kcdMUBtqKOvV74GmLf75POwkehm8SdNvCQJnk4fpi3+/p/mWPpeh9+n5hHb5fEnTbw7onIukaR2VAeyHb3CbFulPipUfsUbhvckdtl8SdNvCP0qO/GG3KMMOsy86Jxtbo2zaqV0Dc242BKwA7opdGOIcDpfdKqLNqj5jaXTjABQKb0tYOObM5XCdSaBvajUzTWrb8U61Ua7uBWVGXEZhTBcnUWGGZcQSDNLh4bUiZt+6+sarD6PE8E9na9I/TnJqvV/UJDaO5ZT7D+9JM6c5PU9H41kNo/llLsP/AEwLTERA8iJDX+kSGy0zhhtOo4ncMZXly1xxuz3SlrzqEzIzT+kTb0GdBmquRSoJ9uu5yovVjrPQDI76Rq/b9g/SRKXr3F1xhbGnaYpT1Lgbhlwd9n8KnL1s0545tJ3Op9ls8a8fvD3uEW2FHNmZQDUc7alRhmdz0sxY+eYmpPL+uTUJJxJwxOocwnMzzLy5Oq02hs4ceqRE+GOkXxTziT/AxQ1vVVgCrOQQdYIKICDK3cYuMqjEkgADnk3ovNbplV9pzNqBGJAGrEdAlnHzVpbqlXy8fVj6Y+Ujwbc0jVsKhJNrgaBO17RseKPSVwZD2BvlglTeqzVErE/WIrIrjAHI5BZSBqIxUHXswnR9I1ft+xf0nf32PxLM7TJ5hZIla0VphqtxxWbFQpLHBdbDDUMBzYyyzpxZIyV3CnJjtjt02exESxWREQEREBERAREQEwKjcJnEDDINw9QnuUbplEBERA8nsRAREQI7TvJ361+NZC2B8Mo9h/hEmdPcnfrT5qSFs+W0Oy/wGBbIiIGD7D1T55xvTPoVTxT1H3T5msyv1KddLV/TK76vw8v7400JU41GOSmN7ts8w29Qi0Xi0WmpPe7TzsxOLMekkk+ecdP6yqz/AMFHFE6ah8dvMMF9c7pn2tqsV/MtKlYmZt+IZFieeeTyeypeCe5jvPrM8iQjT3Od59ZjOd59Znk8kmod/A7lI7De9ZfpRuBluxrGph3gUrjvY4HAb9Ql5m/w4mMT5/nzE5vZlEROtxEREBERAREQEREBERAREQEREBERAREQIzT/ACd+1T+akhbPltDqf4Gk1p/k7dqn85JC2vLLf0vlvAtsREDBhiMN+qUzT2hloUhxbM1eqwoW6nJg1VthOC+KoDOehTLrK7o891XlS5Ouja5rW23NVPKKo6sBTB8l98rvipfXVG9LKZb0/wBZ1tqteB9KnTVBUc4DAnvNZ5z4vOcT55u/Zan94/8Aw/tlgiVzxcU++nuOVmj2i0vnulLUUazU1JIXDAnDHWAebrnJJPhHyqp1D4RIwTBz1iuS0R8bfQ8e02xVmfnUMar4DGTPB/RS3NN3diuVigC5cMAFPODvkJX8WWzgR+5qds/Cs6eHjpe2rRtRz8lqYt1nUtv7K0/vH/6/7Y/ZWn94/wD1/wBssMTV7XF4Y3d5v5SrvB8mhVrWLnHi/CLdjhi9tUY4jVtKPmU9BTfLFILhNQZVS7pLmq2ZNTKPGqUCMK1LzqMw8pFkxb11qIlRGDI4Dow2MpGII8xl8Rr2hRMzM7luiIkoIiICIiAiIgIiICIiAiIgIiICIiAiIgRnCHk7dul89JB258NtfT+U8m+EPJz26Xz6cg7fltr1v8l4FwiIgQ/CO+alSCUj4RcMLe36Kjg4uRuVQznszr0bZpbUadFNSUlCAnacNrMeck4kneTK3wt0HdV61KtbVQFpoUFMO9B1LHvyrgHHMAo5vF265Vbjg7c4/XWVWp5RqU7jH1uT7IH1CrpCinj1qa9p0X3mcr8IbQbbygP5tL9Z8z+jsm2xqp/tqh9qqZkrqu2k6dqjWX+iBO6XukrV3qUnWojYBWQhlOAAOBHSCJxAzkW/pgYFivWjr71j6TpfeD2/pMDPgyTktMRPz4fQ4M+KuKsTaPiG+48WTnBfTVvb0nSvcU6TFi4Wo6oSpVRmwPNiD6pWX0hRIw41fb+k6U0jRAADgjoV29wnXwcNqz1WjTl5/IpavTE7X1OEtm2y8tz/ADaX6zppaWoP4lxSbsvTb3GfPReUj/Cz9VGs/uSClJ/9FUqdVpVPvSarIfTFYMNRDDowIkDoHwatVsDqRcbi0x57d27+mOw5I7LpKimhwTjT0XWB+0q07b2l1Iknovg9dd0W9Zi1BKDFstW4qXblGGDoqkEKGGrx9Wo4HCQL7ERAREQEREBERAREQEREBERAREQEREBERAi+EP7g9ul8+nIKhy2063+TUk7wh/cenT+asgaXLbTtN8mpAuUREBERAREQPJ7EQEREBERAREQEREBERAREQETAjccJgaZ34+uBtnmYb5p4sxkO6BtzDeIzDeJpyHdGQ7oG7MN4jMN4mnId0ZDugb8w3ie4znyHdMatNirBTlYggNqOU4amwO3DdA64lRq6BuztuuN6TUuLbH0UxE5n4P3H8VJH/wBxVf41gXeYFxvHrEob8Han/hK3U9FviImo8Hqn/rx5jaf3wLZwgqqaIAYEl6eoEE/vFMgwwF5aEnAZm1nUP3TyNGg66MrJYlWUhgR3Lzc2pwZnfaNuqxXPZsFXXlzUGzajtxqQL/xq/aHrEyVgdhxnzb9m6x/0PrNp/fH7L1+azA9K3HuaB9LifOF4LXP8NJU/mBfhxnVS4M3w2VwnVXuT7AuEC+YzzMN8g9DaNuKRbj7k1wRgq5R3px8bOTmPVJbId0DbmG8RmG8TTkO6Mh3QN2YbxGYbxNOQ7oyHdA35hvE9xmjId0BDugdETQKZmxVI54GcREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//2Q=="
          alt=""
          className="w-[400px]"
        />
      </div>
      <TitleHeader title={t("Переваги")} />
      <div className="mt-[40px]">
        {t(
          "Високоякісне стиснення відео: WebM використовує ефективні відеокодеки, такі як VP8 і VP9, для стиснення відеофайлів без значної втрати якості. Це дозволяє отримувати відео високої роздільної здатності з меншим розміром файлів, що полегшує їх зберігання та передачу через Інтернет."
        )}
      </div>
      <div className="mt-[20px]">
        {t(
          "Відкритий і безкоштовний: WebM - це відкритий і безкоштовний формат, що означає, що будь-хто може використовувати його без необхідності сплачувати ліцензійні платежі. Це сприяє широкому розповсюдженню та доступності на різних платформах і пристроях."
        )}
      </div>
      <div className="mt-[20px]">
        {t(
          "Широка підтримка браузерів: Більшість сучасних веб-браузерів, включаючи Chrome, Firefox та Opera, підтримують WebM нативно. Це дозволяє безперешкодно відтворювати WebM-відео без додаткових плагінів або встановлення програмного забезпечення."
        )}
      </div>
      <div className="mt-[20px]">
        {t(
          "Ефективна трансляція: WebM оптимізовано для потокового передавання через Інтернет, що робить його ідеальним для доставки відеоконтенту в режимі реального часу. Він підтримує адаптивне потокове передавання, що дозволяє регулювати якість відео залежно від інтернет-з'єднання глядача, забезпечуючи плавне відтворення."
        )}
      </div>
      <div className="mt-[20px]">
        {t(
          "Підтримка прозорості та альфа-каналів: WebM підтримує прозорість і альфа-канали, а це означає, що він може обробляти відео з прозорим фоном або ефектами накладання. Це робить його придатним для таких застосувань, як відеомонтаж, композитинг та анімація."
        )}
      </div>
      <div className="mt-[20px]">
        {t(
          "Широка сумісність платформ: WebM можна відтворювати на різних платформах, включаючи настільні комп'ютери, мобільні пристрої та вбудовані системи. Це забезпечує гнучкість для розробників і творців контенту для доставки відеоконтенту на широкий спектр пристроїв і операційних систем."
        )}
      </div>
      <div className="mt-[20px]">
        {t(
          "Інтеграція з HTML5: WebM тісно інтегрований з HTML5, стандартною мовою розмітки веб-контенту. Його можна легко вбудувати у веб-сторінки за допомогою відеотегів HTML5, що забезпечує безперешкодну інтеграцію та відтворення без необхідності використання сторонніх плагінів."
        )}
      </div>
      <TitleHeader title={t("Недоліки")} />
      <div className="mt-[40px]">
        {t(
          "Обмежена апаратна підтримка: Деякі старі або менш поширені апаратні пристрої можуть не мати вбудованої апаратної підтримки декодування WebM. Це може призвести до підвищеного навантаження на процесор під час відтворення відео у форматі WebM на таких пристроях, що потенційно може вплинути на час роботи від акумулятора та продуктивність."
        )}
      </div>
      <div className="mt-[20px]">
        {t(
          "Обмежений вибір кодеків: WebM переважно використовує відеокодеки VP8 і VP9, які можуть не мати такої широкої підтримки, як інші кодеки, наприклад, H.264. Це може спричинити проблеми сумісності під час роботи з програмами або пристроями, які підтримують лише певні кодеки."
        )}
      </div>
      <div className="mt-[20px]">
        {t(
          "Менш поширений: Хоча WebM підтримується основними веб-браузерами, він може бути не таким широко використовуваним або визнаним, як інші відеоформати, такі як MP4. Це може створювати проблеми при поширенні або розповсюдженні відео у форматі WebM серед ширшої аудиторії, яка може бути більш знайома з іншими форматами."
        )}
      </div>
      <div className="mt-[20px]">
        {t(
          "Компроміси щодо якості: Хоча WebM забезпечує ефективне стиснення, рівень стиснення може впливати на якість відео. Високостиснуті відео у форматі WebM можуть мати візуальні артефакти або знижену якість порівняно з менш стиснутими форматами або форматами без втрат."
        )}
      </div>
      <div className="mt-[20px]">
        {t(
          "Обмежена інструментальна та програмна підтримка: Доступність програмного забезпечення для редагування відео, інструментів конвертації та бібліотек, спеціально розроблених для WebM, може бути більш обмеженою порівняно з іншими більш поширеними відеоформатами. Це може зробити певні завдання з редагування чи обробки відео складнішими або вимагати додаткових кроків для роботи з файлами у форматі WebM."
        )}
      </div>
      <div className="my-[20px]">
        {t(
          "Міркування щодо інфраструктури потокового мовлення: Хоча WebM оптимізовано для потокового передавання, реалізація надійної інфраструктури потокового передавання для відео у форматі WebM може вимагати додаткових налаштувань і конфігурацій порівняно з більш поширеними форматами."
        )}
      </div>
    </div>
  );
};

export default VideoPage;
