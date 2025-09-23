"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Fragment, useEffect, useRef, useState } from "react";
import "../styles.scss";
import { TNavigationItem } from "../type";

const ItemMenu = ({ item }: { item: TNavigationItem }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [item.items, item.images]);

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between items-center cursor-pointer py-4 transition-colors duration-300"
        onClick={() => setOpen(!open)}
      >
        <a
          href={item.href}
          className="hover:underline text-md font-semibold uppercase text-gray-900"
        >
          {item.name}
        </a>
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
            {item.items?.map((subItem) => (
              <Fragment key={subItem.name}>
                <a
                  href={subItem.href}
                  className="hover:underline font-bold text-sm uppercase text-gray-600 hover:text-gray-900 py-1 transition-all duration-300 ease-out"
                >
                  {subItem.name}
                </a>
                {subItem.items && (
                  <div className="flex flex-col gap-2">
                    {subItem.items.map((subItem123) => (
                      <a
                        href={subItem123.href}
                        className="hover:underline text-sm py-1"
                        key={subItem123.name}
                      >
                        {subItem123.name}
                      </a>
                    ))}
                  </div>
                )}
              </Fragment>
            ))}
            {item.images && (
              <div className="flex flex-col gap-3 mt-2">
                {item.images.map((image) => (
                  <div className="image-wrapper relative" key={image}>
                    <img
                      src={image}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="w-full object-cover rounded-md"
                      style={{ aspectRatio: "3/2", height: 200 }}
                    />
                    <div className="image-overlay absolute inset-0 bg-slate-500 opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-md" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemMenu;
