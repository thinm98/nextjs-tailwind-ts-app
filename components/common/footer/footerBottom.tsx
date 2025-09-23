import React from "react";

const FooterBottom: React.FC = () => {
  const contactInfo = [
    {
      type: "email",
      href: "mailto:CARE@LUCAFALONI.COM",
      text: "CARE@LUCAFALONI.COM",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      type: "phone",
      href: "tel:+390350920012",
      text: "+39 035 092 0012",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      ),
    },
    {
      type: "whatsapp",
      href: "#",
      text: "WHATSAPP",
      icon: (
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
      ),
    },
  ];

  const legalLinks = [
    { name: "Privacy policy", href: "#" },
    { name: "Accessibility", href: "#" },
  ];

  return (
    <div className="border-t border-gray-200 lg:border-none">
      <div className="flex flex-col border-b border-gray-200 p-1 space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
        {/* Currency Selector */}
        <div className="text-center md:text-left">
          <select className="text-sm text-gray-600 bg-transparent border-none focus:outline-none cursor-pointer">
            <option>VIETNAM (USD)</option>
            <option>VIETNAM (VND)</option>
          </select>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 text-sm text-gray-600">
          {contactInfo.map((contact) => (
            <a
              key={contact.type}
              href={contact.href}
              className="flex items-center justify-center space-x-2 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                fill={contact.type === "whatsapp" ? "currentColor" : "none"}
                stroke={contact.type === "whatsapp" ? "none" : "currentColor"}
                viewBox="0 0 24 24"
              >
                {contact.icon}
              </svg>
              <span>{contact.text}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Legal Links and Copyright */}
      <div className="mt-6 flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
        <div className="text-center md:text-left">
          <p className="text-xs text-gray-500">
            © All rights reserved: Luca Faloni Ltd - VAT 187078764
          </p>
        </div>
        <div className="flex justify-center space-x-4 text-sm text-gray-600 md:justify-end">
          {legalLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gray-900 underline"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
