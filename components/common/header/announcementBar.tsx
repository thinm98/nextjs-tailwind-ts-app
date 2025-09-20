"use client";

import "./styles.scss";

const AnnouncementBar = () => {
  return (
    <div className="flex gap-8 text-xs min-h-[40px] items-center bg-accent-secondary px-2 py-1.5 md:px-6 md:py-0 lg:px-10">
      <div className="hidden lg:block shrink-0 basic-1/4">test 1</div>
      <div className="flex-1 text-center">
        FREE EXPRESS SHIPPING ABOVE US$300 & FREE 30 DAY RETURNS - NEVER ON SALE
      </div>
      <div className="hidden lg:block shrink-0 basic-1/4">
        F&Q | Contact Us 
      </div>
    </div>
  );
};

export default AnnouncementBar;
