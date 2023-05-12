const TitleHeader = ({ id, title }) => {
  return (
    <h1 id={id} className="pt-[40px] text-center">
      <div className="inline px-[20px] py-[10px] rounded-2xl bg-[#3089cc]">
        {title}
      </div>
    </h1>
  );
};

export default TitleHeader;
