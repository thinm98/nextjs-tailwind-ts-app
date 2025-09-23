"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Fragment, useEffect, useRef, useState } from "react";
import { FooterSection } from "../types";

type Props = {
  item: FooterSection;
};

const ItemMenu = ({ item }: Props) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [item.links]);

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between items-center cursor-pointer py-4  transition-colors duration-300"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
          {item.title}
        </h3>
        <div
          className={`transform transition-all duration-300 ease-in-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDownIcon width={16} height={16} className="text-gray-500" />
        </div>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: open ? `${height}px` : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div
          ref={contentRef}
          className={`pb-4 transition-all duration-300 ease-out ${
            open ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="flex flex-col gap-3 pt-2">
            {item.links?.map((subItem) => (
              <Fragment key={subItem.name}>
                <a
                  href={subItem.href}
                  className={`hover:underline text-sm text-gray-600 hover:text-gray-900 py-1 transition-all duration-300 ease-out ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                >
                  {subItem.name}
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemMenu;
