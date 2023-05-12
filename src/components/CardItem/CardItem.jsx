import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta.js";

const CardItem = ({ titleText, imgLink, buttonText, handleClick }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="#" src={imgLink} className="w-[300px] h-[200px]" />}
    >
      <Meta
        title={titleText}
        description={
          <Button onClick={handleClick} type="primary" className="text-center">
            {buttonText}
          </Button>
        }
      />
    </Card>
  );
};

export default CardItem;
