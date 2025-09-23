import AnnouncementBar from "./announcementBar";
import HeaderAction from "./headerAction";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <AnnouncementBar />
      <div className="w-full flex-col px-8 pt-4 xl:flex">
          <HeaderAction />
      </div>
    </div>
  );
};

export default Header;
