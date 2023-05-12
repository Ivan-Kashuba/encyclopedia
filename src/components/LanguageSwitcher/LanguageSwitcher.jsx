import { Select } from "antd";
import i18n from "i18next";
import { useMemo } from "react";

const LanguageSwitcher = () => {
  const { changeLanguage } = i18n;
  const onChangeLanguage = (value) => {
    changeLanguage(value);
  };

  const languageOptions = [
    {
      value: "en",
      label: "English 🇬🇧",
    },
    {
      value: "ua",
      label: "Українська 🇺🇦",
    },
  ];

  const selectedLanguage = useMemo(() => {
    return languageOptions?.filter((l) => {
      return l.value.includes(i18n.language?.slice(0, 2));
    })[0];
  }, [languageOptions]);

  return (
    <Select
      defaultValue={selectedLanguage}
      className="w-[150px]"
      dropdownMatchSelectWidth={false}
      placement="bottomLeft"
      onChange={onChangeLanguage}
      options={languageOptions}
    />
  );
};

export default LanguageSwitcher;
