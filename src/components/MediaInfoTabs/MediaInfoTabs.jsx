import { Tabs } from "antd";

const MediaInfoTabs = (props) => {
  const { onTabChange, tabsOptions, mainText, secondaryText } = props;
  return (
    <div>
      <div className="mt-[40px] font-MariupolBold text-center text-[24px] leading-[24px]">
        {mainText}
      </div>
      <div className="my-[40px] font-MariupolMedium text-[18px] leading-[30px] text-int-white-secondary text-center">
        {secondaryText}
      </div>
      <div className="flex items-center justify-center tab-container">
        <Tabs
          className="text-int-white-main font-MariupolBold"
          defaultActiveKey={1}
          tabPosition="horizontal"
          size="large"
          onChange={onTabChange}
          type="card"
          items={tabsOptions}
        />
      </div>
    </div>
  );
};

export default MediaInfoTabs;
