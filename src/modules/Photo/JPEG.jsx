import { useTranslation } from "react-i18next";
import { Anchor } from "antd";
import TitleHeader from "../../style/TitleHeader.jsx";

const Jpeg = () => {
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
              title: t("Основа"),
            },
            {
              key: "part-2",
              href: "#part-2",
              title: t("Технічні деталі"),
            },
            {
              key: "part-3",
              href: "#part-3",
              title: t("Загальна інформація"),
            },
            {
              key: "part-4",
              href: "#part-4",
              title: t("Переваги"),
            },
            {
              key: "part-5",
              href: "#part-5",
              title: t("Недоліки"),
            },
            {
              key: "part-6",
              href: "#part-6",
              title: t("Процес стиснення"),
            },
            {
              key: "part-7",
              href: "#part-7",
              title: t("Колірна субдискретизація"),
            },
            {
              key: "part-8",
              href: "#part-8",
              title: t("Квантування"),
            },
            {
              key: "part-9",
              href: "#part-9",
              title: t("Кодування Гаффмана"),
            },
            {
              key: "part-10",
              href: "#part-10",
              title: t("Як зберігати"),
            },
          ]}
        />
      </div>
      <div className="flex">
        <img
          src="https://sebweo.com/wp-content/uploads/2020/01/what-is-jpeg_thumb-800x478.jpg?x13120"
          alt="#"
          className="w-[600px] h-[400px] bg-int-white-secondary mr-[30px]"
        />
        <div className="text-int-white-main">
          <div>
            {t(
              "Той, хто коли-небудь користувався Інтернетом, ймовірно, бачив зображення в форматі JPEG. На сьогоднішній день це найпоширеніший спосіб кодування, надсилання по мережі і зберігання зображень. Формат JPEG використовується мільярди разів на день. Без JPEG Всесвітня павутина була б трохи менш барвистою, набагато повільнішою і, ймовірно, не володіла б таким багатством зображень кішок!"
            )}
          </div>

          <div className="mt-[20px]">
            {t(
              "Сьогодні ви можете надіслати зображення у форматі JPEG другу по електронній пошті, не турбуючись про те, який пристрій, браузер або операційну систему він використовує. Але так було не завжди. На початку 1980-х комп’ютери вже могли зберігати і відображати цифрові зображення, але існувало багато конкуруючих ідей та підходів для цієї реалізації. Ви не могли просто надіслати картинку з одного комп’ютера на інший і очікувати, що це буде нормально працювати."
            )}
          </div>
          <div className="mt-[20px]">
            {t(
              "Для вирішення цієї проблеми в 1986 році спільними зусиллями ISO (Міжнародна організація по стандартизації) та IEC (Міжнародна електротехнічна комісія) була створена Об’єднана група експертів по фотографії (Joint Photographic Experts Group – абревіатура JPEG) зі штаб-квартирою в Женеві (Швейцарія)."
            )}
          </div>
          <div className="mt-[20px]">
            {t(
              "JPEG, група експертів, створила JPEG, стандарт стиснення цифрових зображень, в 1992 році."
            )}
          </div>
        </div>
      </div>
      <TitleHeader title={t("Технічні деталі")} id="part-2" />
      <div className="mt-[40px]">
        {t(
          "Вся інформація на комп’ютері зберігається у вигляді серії двійкових чисел. Як правило, це біти, нулі і одиниці, що об’єднуються в групи по вісім, відомі як байти. Коли ви відкриваєте зображення JPEG на своєму комп’ютері, щось (браузер, ваша операційна система або щось ще) повинно декодувати байти, щоб відновити вихідне зображення у вигляді списку кольорів, які потім можна відобразити."
        )}
      </div>
      <div>
        {t(
          "Якщо ви відкриєте будь-яке зображення за допомогою текстового редактора (наприклад, Notepad++), ви побачите купу спотворених символів. Відкривши зображення в текстовому редакторі, ви заплутали комп’ютер, точно таким чином, як заплутали свій мозок, коли занадто сильно терли очі і тоді починаєте бачити тьмяні плями та кольори!"
        )}
      </div>
      <div className="m-auto text-center my-[15px]">
        <img
          src="https://sebweo.com/wp-content/uploads/2020/tech/what-is-jpeg_cat-in-notepad-plus-plus.jpg?x13120"
          alt="#"
        />
      </div>
      <div>
        {t(
          "Ці тьмяні плями, які ви бачите – відомі як фосфени – не походять від будь-яких світлових стимулів, і при цьому вони не є галюцинаціями, створеними вашим розумом. Вони виникають тому, що ваш мозок передбачає, що будь-який електричний сигнал, що надходить через нерви в ваше око, передає світлову інформацію. Мозок повинен зробити це припущення, тому що немає ніякого способу дізнатися, чи є даний сигнал звуком, образом або чимось ще. Всі нерви в вашому тілі несуть електричний імпульс однакового типу. Коли ви чините тиск, потираючи очі, ви посилаєте невізуальні сигнали, що запускають рецептори в вашому оці, які ваш мозок інтерпретує – в даному випадку неправильно – як образ. І ви буквально бачите тиск на очі!Комп’ютери багато в чому схожі на наш мозок, — тут важлива правильна інтерпретація сигналів. Всі двійкові дані складаються з одиниць і нулів, базових компонентів, які можуть передавати будь-яку інформацію. Ваш комп’ютер часто здогадується, як її інтерпретувати, використовуючи підказки (наприклад, розширення файлу). Тут ми змусили його інтерпретувати картинку як текст, тому що саме цього чекає текстовий редактор.Якщо ж ви відкриєте картинку в HEX-редакторі, то ви побачите просто великий набір цифр. У таких редакторах байти представлені у вигляді десяткових чисел. Ви можете вносити зміни в байти, і редактор буде змінювати зображення. А для перегляду зображень, закодованих в форматі JPEG, спочатку їх треба декодувати. Цей процес виконується спеціальною програмою поетапно, але в зворотному кодуванню порядку."
        )}
      </div>
      <div className="text-center my-[15px]">
        <img
          src="https://sebweo.com/wp-content/uploads/2020/tech/what-is-jpeg_cat-in-jpeg-editor.jpg?x13120"
          alt="#"
        />
      </div>
      <TitleHeader
        title={t("Загальна інформація про формат JPEG")}
        id="part-3"
      />
      <div className="mt-[40px]">
        {t(
          "Файли зображень в форматі JPEG мають наступні розширення: JPG, JFIF, JPE і JPEG. На сьогоднішній день найпоширенішим варіантом є розширення JPG.\n" +
            "Зберігання графічної інформації у файловому форматі JPEG використовує алгоритм методу стиснення з втратами. Це дозволяє стискати дані з досить високою ефективністю. У форматі JPEG можна зберігати картинки з глибиною кольору до 24 біт/піксель і розміром їх сторін не більше 65535 пікселів (2311,93 см).\n" +
            "В JPEG не зберігається альфа-канал (прозорість)."
        )}
      </div>
      <TitleHeader title={t("Переваги та недоліки")} id="part-4" />
      <div id="part-5" className="mt-[40px]">
        {t(
          "Формат JPEG набув популярності завдяки своєму алгоритму стиснення, який дозволяє значно стискати інформацію і при цьому зберігати основні кольори та яскравість. Файли в цьому форматі можуть мати невеликий розмір, але при цьому зберігати прийнятну якість зображень.\n" +
            "\n" +
            "Цей формат використовується у більшості цифрових фотокамер.\n" +
            "\n" +
            "Зображення в форматі JPEG можна без проблем переглянути на будь-якому електронному пристрої: комп’ютер, телевізор, смартфон, ігрова приставка і так далі. Цей формат підтримується у всіх основних операційних системах: Mac OS, Linux, Windows, Android, iOS."
        )}
      </div>
      <div className="mt-[20px]">
        {t(
          "Головним недоліком формату JPEG можна вважати те, що картинки в цьому форматі можна ефективно обробляти тільки один раз. Після кожного збереження зображення втрачають якість і чим вище рівень стиснення, тим гірше буде їх якість.Іншим недоліком формату JPEG є те, що він не зберігає шари і альфа канали (прозорість).Обмеження формату, які безпосередньо залежать від рівня стиснення інформації:"
        )}
      </div>
      <div className="flex justify-center items-center">
        <div className="mr-[150px]">
          <div className="mt-[15px] flex items-center">
            <div className="bg-int-grapefruit rounded-full w-[8px] h-[8px] mr-[8px]" />
            <div>{t("Спотворення кольору")}</div>
          </div>
          <div className="mt-[5px] flex items-center">
            <div className="bg-int-grapefruit rounded-full w-[8px] h-[8px] mr-[8px]" />
            <div>{t("Мозаїчність")}</div>
          </div>
          <div className="mt-[5px] flex items-center">
            <div className="bg-int-grapefruit rounded-full w-[8px] h-[8px] mr-[8px]" />
            <div>{t("Ореоли навколо контурів")}</div>
          </div>
          <div className="mt-[5px] flex items-center">
            <div className="bg-int-grapefruit rounded-full w-[8px] h-[8px] mr-[8px]" />
            <div>{t("Поява шумів")}</div>
          </div>
        </div>
        <div>
          <div className="mt-[5px] flex items-center">
            <div className="bg-int-grapefruit rounded-full w-[8px] h-[8px] mr-[8px]" />
            <div>{t("Втрата деталізації")}</div>
          </div>
          <div className="mt-[5px] flex items-center">
            <div className="bg-int-grapefruit rounded-full w-[8px] h-[8px] mr-[8px]" />
            <div>{t("Ступінчастість ліній")}</div>
          </div>
          <div className="mt-[5px] flex items-center">
            <div className="bg-int-grapefruit rounded-full w-[8px] h-[8px] mr-[8px]" />
            <div>{t("Погіршення різкості")}</div>
          </div>
        </div>
      </div>
      <TitleHeader
        title={t("Детальніше про процес стиснення файлів у форматі JPEG")}
        id="part-6"
      />
      <div className="mt-[40px]">
        {t(
          "Щоб дати вам уявлення про масштаб стиснення, яке використовується в цьому форматі, уявіть собі зображення вагою приблизно в 100 кілобайт. Якби інформація про зображення зберігалася без стиснення, для кожного пікселя треба було б три числа – по одному для кожного з червоного, зеленого і синього компонентів. Це буде означати в цілому 1 140 000 чисел, або близько 1,2 мегабайт. Завдяки стисненню JPEG вихідний файл стає в більш ніж десять разів меншим!Процес стиснення картинки в форматі JPEG проводиться не відразу, а поетапно."
        )}
      </div>
      <div className="mt-[30px]">
        <div>{t("Існує 3 рівні стиснення які використовуються в JPEG")}</div>
        <div className="mt-[20px]">
          <div className="mt-[5px] flex items-center">
            <div className="bg-int-grapefruit rounded-full w-[8px] h-[8px] mr-[8px]" />
            <div>{t("Колірна субдискретизація (Chrominance Subsampling)")}</div>
          </div>
          <div className="mt-[5px] flex items-center">
            <div className="bg-int-grapefruit rounded-full w-[8px] h-[8px] mr-[8px]" />
            <div>
              {t(
                "Дискретне косинусне перетворення і квантування (Discrete Cosine Transform and Quantization)"
              )}
            </div>
          </div>
          <div className="mt-[5px] flex items-center">
            <div className="bg-int-grapefruit rounded-full w-[8px] h-[8px] mr-[8px]" />
            <div>
              {t(
                "Довжина циклу, дельта і кодування Гоффмана (Run-Length, Delta & Huffman Encoding)"
              )}
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-[40px]">{t("Колірна субдискретизація")}</h2>
      <div className="mt-[20px]" id="part-7">
        {t(
          "В першу чергу цифрове зображення переводиться з колірного простору RGB в YCbCr. У ньому компонента Y відповідає за яскравість зображення, Cb – це відносна синява (relative blueness), Cr – це відносне почервоніння (relative redness). Останні 2 компонента кодуються повністю, і в них зменшується інформація про колір.Цей етап в деякій мірі схожий на те, як працюють людські очі. Кольорові рецептори в наших очах, відомі як «колбочки», діляться на три типи, кожен з яких найбільш чутливий до червоного, зеленого чи синього. Палички, інший тип рецептора, яким наші очі бачать, можуть виявляти тільки зміни яскравості, але вони набагато більш чутливі. У наших очах близько ста двадцяти мільйонів паличок в порівнянні з жалюгідними шістьма мільйонами колбочок.Це означає, що наші очі набагато краще виявляють зміни яскравості, ніж вони виявляють зміни кольору. Якщо ми можемо відокремити колір від яскравості, ми можемо видалити трохи кольору, щоб ніхто не помітив. Підвибірка насиченості кольору – це процес подання колірних компонентів зображення з більш низьким дозволом, ніж у його компонентів яскравості.Кожен піксель має рівно один компонент Y, тоді як кожна дискретна група з чотирьох пікселів має рівно один компонент Cb і один компонент Cr. Таким чином, зображення містить тільки чверть інформації про початковий колір.Використання колірного простору YCbCr не є унікальним для JPEG. Насправді, він був розроблений в 1938 році для телевізійних передач. Не у всіх були кольорові телевізори, тому відділення кольору від яскравості дозволило всім отримувати однакову передачу, а телевізори, які не підтримували колір, просто використовували компонент яскравості."
        )}
      </div>

      <h2 className="mt-[40px]">{t("Квантування")}</h2>
      <div className="mt-[20px]" id="part-8">
        {t(
          "На цьому етапі все зображення розбивається на окремі квадрати розміром 8×8 пікселів і над кожним з них відбувається перетворення. При цьому кожен квадрат розкладається на складові кольору для підрахунку частоти появи їх по всьому зображенню.Цей рівень стиснення в значній мірі є визначальною особливістю JPEG. Після перетворення кольорів в YCbCr компоненти стискаються окремо. Дискретне косинусне перетворення (Discrete Cosine Transform – DCT) – це процес розбиття зображення на блоки 8×8 і перетворення кожного блоку в комбінацію з 64 патернів.Звучить неймовірним те, що будь-яке зображення може бути представлене з використанням 64 особливих шаблонів (патернів). Але це те ж саме, що сказати, що будь-яке місце на Землі можна уявити з використанням тільки двох чисел: довготи і широти. Поверхню Землі можна представити як двовимірну, тому тут потрібні тільки два числа. Зображення 8х8 має шістдесят чотири виміри, тому нам потрібно шістдесят чотири числа.З точки зору стиснення, не очевидно, як це допомагає нам. Якщо нам потрібно шістдесят чотири числа для представлення зображення 8×8, чому це краще, ніж зберігати шістдесят чотири компонента яскравості? Ми робимо це з тієї ж причини, по якій ми перетворили три числа RGB в три числа YCbCr: це дозволяє нам видаляти деталі, які менш помітні.Важко зрозуміти, як саме виглядають деталі, які видаляються на цьому етапі стиснення, тому що JPEG застосовує дискретне косинусне перетворення тільки до блоків по 8×8 пікселів за один раз. Однак немає причин, за якими ми не можемо застосувати його до всього зображення.\n" +
            "На цьому етапі стиснення JPEG видаляє високочастотні деталі. Перетворення кольорів в коефіцієнти (патерни) DCT не є операцією з втратами. Це крок квантування здійснюється з втратами, при якому значення високої частоти, значення близькі до нуля або обидва, видаляються. Коли ви вибираєте нижче налаштування якості для зображення JPEG, це збільшує поріг для того, скільки з цих значень буде видалено, що призводить до меншого розміру файлу, але до більш «зернистого» зображення.Об’єм видаленої з файлу JPEG інформації під час такої обробки сильно залежить від зазначеного рівня стиснення, і чим він більший, тим гірше буде якість зображення. Таке зображення вже ніколи не можна буде повернути до первісного вигляду. Саме тому JPEG називається форматом стиснення з втратами якості. Розмір файлу після стиснення в порівнянні з вихідним файлом безпосередньо залежить від деталізації зображення і чим більше дрібних деталей, тим більше розмір файлу. Краще стискаються ті зображення, в яких менше шуму і більше плавних колірних переходів і переходів яскравості. Чим вище контраст, тим гірше стискається картинка."
        )}
      </div>

      <h2 className="mt-[40px]">{t("Кодування Гаффмана")}</h2>
      <div className="mt-[20px]" id="part-9">
        {t(
          "На цьому етапі стиснення кодуються кольори та яскравість зображення. При цьому зберігаються тільки відмінності 64-х піксельних квадратів, а вся однакова інформація видаляється. Потім результати такого кодування представляються числами, які теж стискаються за спеціальним алгоритмом.Всі етапи стиснення досі були з втратами. Цей останній етап, навпаки, без втрат. Він не видаляє будь-яку інформацію, але значно зменшує розмір файлу.Як відбувається стиснення, якщо не відсікається якась інформація?Подумайте про просте суцільне чорне зображення. JPEG використовує близько 5000 чисел, щоб представити його, але ми можемо зробити набагато краще. Як можна зробити це з найменшою кількістю байтів? Найменше, що можна придумати, це чотири байти: три для вказівки кольору і один для визначення кількості пікселів, що мають цей колір. Ідея виразити всі повторювані значення коротко таким способом називається кодуванням по довжині прогону. Це буде без втрат, тому що ми можемо відновити закодовані дані точно в тому вигляді, як це було раніше.Розмір файлу суцільного чорного зображення JPEG набагато більше, ніж чотири байти, тому що пам’ятайте, що в шарі DCT стиснення застосовується до блоків 8×8 одночасно. Тому, як мінімум, нам знадобиться один коефіцієнт DCT для кожного блоку в 64 пікселя. Нам потрібен тільки один, тому що замість збереження одного коефіцієнта DCT, за яким слідують 63 нуля для цього зображення, кодування по довжині прогону дозволяє нам просто зберегти одне число і сказати «інші дорівнюють нулю».Дельта-кодування – це метод зберігання кожного байта в якості відносного значення в порівнянні з чимось перед ним, замість збереження його абсолютного значення.Для цього етапу характерно те, що тут відбувається запис заголовків в JPEG. Заголовки – це перші близько 500 байтів, які містять метадані про зображення, такі як його ширина і висота. Без заголовка практично неможливо (або, принаймні, дуже важко) декодувати зображення JPEG. Кожне зображення JPEG стискається з кодом, який специфічний для цього конкретного зображення. Ці коди визначені в словнику, що зберігається в заголовку. Цей метод називається кодуванням Гаффмана, а словник (алфавіт) називається таблицею Гаффмана. Кожен компонент кольору може мати свою власну таблицю Гаффмана.Таблиці Гаффмана мають такий сильний вплив на зображення, оскільки вони говорять нам, як читати окремі біти. До цих пір ми мали справу з двійковими числами в десятковому вигляді. Це приховує той факт, що якщо ви хочете зберегти число 1 в байті, воно буде виглядати як 00000001, тому що кожен байт повинен мати рівно вісім бітів, навіть якщо йому потрібен тільки один біт.Це потенційно величезна трата сховища, якщо у вас багато невеликих номерів. Кодування Гаффмана – це метод, який дозволяє нам послабити цю вимогу про те, що кожне число має займати вісім бітів."
        )}
      </div>

      <h2 className="mt-[40px]">{t("Як зберігати")}</h2>
      <div className="mt-[20px]" id="part-10">
        {t(
          "З огляду на всі переваги і недоліки файлового формату JPEG, які ми розглянули вище, ви зможете ефективно зберігати зображення в цьому форматі. Це дозволить вам заощадити дисковий простір на комп’ютері і при цьому зберегти високу якість зображень.Багато фотографів роблять основну помилку: фотографії інших, більш «важких» графічних форматів, для економії місця переводять в формат JPEG, обробляють кілька разів і при цьому ще сильно стискають. Все це можна робити тільки з копіями фотографій. Не забувайте, що формат JPEG призначений в основному для ефективного перегляду зображень, а не для наступних обробок і доопрацювань.Якщо ви робите фотографії у форматі JPEG, а потім хочете їх якісно обробити, тоді спочатку їх слід перевести в формат PSD або TIFF. Ці формати матимуть великий розмір, але зате у них не буде тих недоліків, які притаманні файлам JPEG. Тільки після остаточного завершення обробки фотографії ви можете зберегти її у форматі JPEG.Для поліпшення якості фотографій в форматі JPEG, при збереженні завжди встановлюйте колірний профіль sRGB. Цей профіль підтримується всіма графічними програмами, всіма технічними пристроями і на всіх платформах. В результаті ваші фотографії будуть виглядати скрізь однаково."
        )}
      </div>
    </div>
  );
};

export default Jpeg;