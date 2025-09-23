export type TNavigation = {
    menu: TNavigationItem[];
    quickLinks: {
        name: string;
        href: string;
    }[];
}

export type TNavigationItem = {
    name: string;
    href?: string;
    items?: TNavigationItem[];
    images?: string[];
    quickLinks?: {
        name: string;
        href: string;
    }[];
};  