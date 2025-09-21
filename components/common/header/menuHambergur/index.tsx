"use client";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";
import { TNavigation } from "../type";
import ItemMenu from "./itemMenu";
type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    navigation: TNavigation;
}
const MenuHambergur = ({ open, setOpen, navigation }: Props) => {
    const [openItem, setOpenItem] = useState(false);
    return (
        <Transition show={open} as={Fragment}>
            <Dialog onClose={() => setOpen(false)} className="relative z-50">
                <TransitionChild
                    as={Fragment}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div onClick={() => setOpen(false)} className="fixed inset-0 top-[90px] bg-black/30" aria-hidden="true" />
                </TransitionChild>

                <TransitionChild
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="transform translate-x-full"
                    enterTo="transform translate-x-0"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform translate-x-0"
                    leaveTo="transform translate-x-full"
                >
                    <div className="fixed inset-y-0 right-0 top-[90px] w-[500px] bg-white shadow-xl max-w-md p-2 overflow-auto">
                        {navigation.menu.map((item) => (
                            <ItemMenu key={item.name} item={item} />
                        ))}
                        <div className="navigation-item-submenu-quick-links ">
                            {navigation.quickLinks.map((quickLink) => (
                                <a href={quickLink.href} className="hover:underline text-sm uppercase font-semibold px-1" key={quickLink.name}>{quickLink.name}</a>
                            ))}
                        </div>
                    </div>
                </TransitionChild>
            </Dialog>
        </Transition>
    );
};

export default MenuHambergur;