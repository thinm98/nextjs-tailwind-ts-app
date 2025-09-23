"use client";
import FooterBottom from "./footerBottom";
import FooterLinks from "./footerLinks";
import FooterNewsletter from "./footerNewsletter";
import FooterSocial from "./footerSocial";
import { FooterData } from "./types";

const Footer = () => {
  const footerData: FooterData = {
    company: {
      title: "COMPANY",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Stores", href: "#" },
        { name: "Loyalty", href: "#" },
        { name: "Craftsmanship", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    customerCare: {
      title: "CUSTOMER CARE",
      links: [
        { name: "Orders & Shipping", href: "#" },
        { name: "Returns & Exchanges", href: "#" },
        { name: "Returns Portal", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
    services: {
      title: "SERVICES",
      links: [
        { name: "Gift Card", href: "#" },
        { name: "Care Guide", href: "#" },
        { name: "Personal Styling", href: "#" },
        { name: "All Services", href: "#" },
      ],
    },
  };

  return (
    <footer className="bg-gray-100 pt-8 pb-8 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Newsletter */}
        <FooterNewsletter isMobile={true} />
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Desktop Links */}
          {(Object.keys(footerData) as Array<keyof FooterData>).map(
            (section) => {
              const sectionData = footerData[section];
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
                          className="text-gray-600 hover:underline text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          )}

          {/* Desktop Newsletter & Social */}
          <div>
            <FooterNewsletter isMobile={false} />
            <FooterSocial isMobile={false} />
          </div>
        </div>
        {/* Mobile Collapsible Links */}
        <FooterLinks data={footerData} isMobile={true} />
        {/* Mobile Social & Payments */}
        <div className="lg:hidden">
          <FooterSocial isMobile={true} />
        </div>
        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
