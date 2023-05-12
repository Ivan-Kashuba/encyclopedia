import CardItem from "../../components/CardItem/CardItem.jsx";
import { useTranslation } from "react-i18next";

const ExampleItems = ({
  photoHandleClick,
  videoHandleClick,
  audioHandleClick,
}) => {
  const { t } = useTranslation();
  const CARDS_DATA = [
    {
      titleText: t("Демонстрація фото"),
      imgLink:
        "https://st.depositphotos.com/1203257/4456/i/600/depositphotos_44560477-stock-photo-food-photography.jpg",
      buttonText: t("Зробити фото"),
      handleClick: photoHandleClick,
    },
    {
      titleText: t("Демонстрація відео"),
      imgLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIq5ke0VCsqJs18E1wro5YCt7ZYCtUl49qGg&usqp=CAU",
      buttonText: t("Зняти відео"),
      handleClick: videoHandleClick,
    },
    {
      titleText: t("Демонстрація аудіо"),
      imgLink:
        "https://st2.depositphotos.com/1006542/5243/i/600/depositphotos_52438853-stock-photo-audio-book-concept.jpg",
      buttonText: t("Записати аудіо"),
      handleClick: audioHandleClick,
    },
  ];

  return (
    <div className="max-w-[1000px] m-auto flex items-center justify-between">
      {CARDS_DATA.map((cardInfo, index) => {
        return <CardItem key={index} {...cardInfo} />;
      })}
    </div>
  );
};

export default ExampleItems;
