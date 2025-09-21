"use client";
import { Cross1Icon, HamburgerMenuIcon, MagnifyingGlassIcon, PersonIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import MenuHambergur from "./menuHambergur";
import Navigation from "./navigation";
import "./styles.scss";
import { TNavigation } from "./type";
const HeaderAction = ({ navigation }: { navigation: TNavigation }) => {
    const [open, setOpen] = useState(false);
    return <div className="header-action flex flex-col gap-4 w-full flex-col  xl:flex">
        <div className="flex items-center justify-between px-8 pt-4" style={{ height: "48px" }}>
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
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" className="text-[hsl(var(--accent-primary))] group-hover:text-red-500 transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="M3.85664 20.25L5.65664 6.75H18.3434L20.1434 20.25H3.85664Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M15 9V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
                </IconButton>
                <IconButton size="2" color="indigo" className="lg:hidden w-[40px] h-[40px] group cursor-pointer" onClick={() => setOpen(true)}>
                    {open ? <Cross1Icon width={24} height={24} className="text-[hsl(var(--accent-primary))] group-hover:text-red-500 transition-colors" /> : <HamburgerMenuIcon width={24} height={24} className="text-[hsl(var(--accent-primary))] group-hover:text-red-500 transition-colors" />}
                </IconButton>
                <MenuHambergur open={open} setOpen={setOpen} navigation={navigation} />
            </div>

        </div>
        <div className="hidden lg:block">
            <Navigation navigation={navigation} />
        </div>
    </div>
};

export default HeaderAction;