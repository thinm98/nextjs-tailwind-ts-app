"use client";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { HamburgerMenuIcon, MagnifyingGlassIcon, PersonIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import Image from "next/image";
import { Fragment, useState } from "react";
const HeaderAction = () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-between" style={{ height: "48px" }}>
        <div className="hidden lg:flex flex-1"></div>
        <Image src="/logo.png" alt="logo" width={200} height={100} style={{ height: "100%", objectFit: "contain" }} />
        <div className="flex flex-1 items-center justify-end gap-2">
            <IconButton size="4" variant="soft" className="w-[40px] h-[40px] group cursor-pointer">
                <MagnifyingGlassIcon width={24} height={24} className="text-[hsl(var(--accent-primary))] group-hover:text-red-500 transition-colors" />
            </IconButton>
            <IconButton size="2" color="indigo" className="hidden lg:block w-[40px] h-[40px] group cursor-pointer">
                <PersonIcon width={24} height={24} className="text-[hsl(var(--accent-primary))] group-hover:text-red-500 transition-colors" />
            </IconButton>
            <IconButton size="2" className="w-[40px] h-[40px] group cursor-pointer">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" className="text-[hsl(var(--accent-primary))] group-hover:text-red-500 transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="M3.85664 20.25L5.65664 6.75H18.3434L20.1434 20.25H3.85664Z" stroke="currentColor" stroke-width="1.5"></path><path d="M15 9V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"></path></svg>
            </IconButton>
            <IconButton size="2" color="indigo" className="lg:hidden w-[40px] h-[40px] group cursor-pointer" onClick={() => setOpen(true)}>
                <HamburgerMenuIcon width={24} height={24} className="text-[hsl(var(--accent-primary))] group-hover:text-red-500 transition-colors" />
            </IconButton>
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
                        <div onClick={() => setOpen(false)} className="fixed inset-0 top-[60px] bg-black/30" aria-hidden="true" />
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
                        <div className="fixed inset-y-0 right-0 top-[60px] w-[280px] bg-white shadow-xl border-l">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="text-lg font-medium">Menu</div>
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="p-2 text-gray-500 hover:text-gray-700"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        ✕
                                    </button>
                                </div>
                                <nav className="flex flex-col space-y-6">
                                    <a href="/" className="text-gray-600 hover:text-gray-900">
                                        Home
                                    </a>
                                    <a href="/products" className="text-gray-600 hover:text-gray-900">
                                        Products
                                    </a>
                                    <a href="/about" className="text-gray-600 hover:text-gray-900">
                                        About
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </div>
    </div>;
};

export default HeaderAction;