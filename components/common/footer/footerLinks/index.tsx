"use client";
import React from "react";
import { FooterData } from "../types";
import ItemMenu from "./itemMenu";

interface FooterLinksProps {
  data: FooterData;
  isMobile?: boolean;
}

const FooterLinks: React.FC<FooterLinksProps> = ({
  data,
  isMobile = false,
}) => {
  const renderDesktopSection = (section: keyof FooterData) => {
    const sectionData = data[section];
    return (
      <div key={section}>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
          {sectionData.title}
        </h3>
        <ul className="space-y-3">
          {sectionData.links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  if (isMobile) {
    return (
      <div className="lg:hidden space-y-0">
        {(Object.keys(data) as Array<keyof FooterData>).map((section) => {
          const sectionData = data[section];
          return <ItemMenu key={section} item={sectionData} />;
        })}
      </div>
    );
  }

  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {(Object.keys(data) as Array<keyof FooterData>).map(renderDesktopSection)}
    </div>
  );
};

export default FooterLinks;
