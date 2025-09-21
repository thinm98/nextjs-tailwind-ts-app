"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Fragment, useState } from "react";
import "../styles.scss";
import { TNavigationItem } from "../type";
const ItemMenu = ({ item }: { item: TNavigationItem }) => {
    const [open, setOpen] = useState(false);
    return (<div className="item-menu-header " style={{ padding: open ? '0 0 16px 0' : '0' }}>
        <div className="flex justify-between items-center cursor-pointer py-3.5 my-0.5" onClick={() => setOpen(!open)}>
            <a href={item.href} className="hover:underline text-md font-semibold uppercase">{item.name}</a>
            <div className={`transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
                <ChevronDownIcon width={16} height={16} />
            </div>
        </div>
        <div
            className={`item-menu-content overflow-hidden transition-all duration-300 ease-in-out`}
            style={{
                maxHeight: open ? '3000px' : '0',
                opacity: open ? 1 : 0,
            }}
        >
            <div className="flex flex-col gap-2">
                {item.items?.map((subItem) => (
                    <Fragment key={subItem.name}>
                        <a href={subItem.href} className="hover:underline font-bold text-sm uppercase">{subItem.name}</a>
                        {subItem.items && (
                            <div className="flex flex-col gap-2">
                                {subItem.items.map((subItem123) => (
                                    <a href={subItem123.href} className="focus-visible hover:underline pb-2 pt-0 focus-visible focus-visible my-1 mr-4 block text-sm leading-4 lg:py-2 lg:text-sm xl:m-0">{subItem123.name}</a>
                                ))}
                            </div>
                        )}
                    </Fragment>
                ))}
                {item.images && (
                    <div className="flex flex-col gap-2">
                        {item.images.map((image) => (
                            <div className="image-wrapper relative">
                                <img src={image} alt={item.name} className="w-full object-cover" style={{ aspectRatio: '3/2', height: 300 }} />
                                <div className="image-overlay absolute inset-0 bg-slate-500  opacity-0 transition-opacity duration-300 hover:opacity-30" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
    )
}

export default ItemMenu;