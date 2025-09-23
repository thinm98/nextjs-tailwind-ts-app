export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  company: FooterSection;
  customerCare: FooterSection;
  services: FooterSection;
}

export interface OpenSections {
  company: boolean;
  customerCare: boolean;
  services: boolean;
}
