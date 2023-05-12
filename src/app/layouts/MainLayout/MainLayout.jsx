import MainHeader from "./MainHeader.jsx";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div
        className={`min-h-[calc(100vh-theme(spacing.header-height))] max-w-container-size text-int-white-main m-auto py-[15px]`}
      >
        {children}
      </div>
    </>
  );
};

export default MainLayout;
