"use client";
import React, { useState } from "react";

interface FooterNewsletterProps {
  isMobile?: boolean;
}

const FooterNewsletter: React.FC<FooterNewsletterProps> = ({
  isMobile = false,
}) => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    // Handle newsletter signup logic here
  };

  return (
    <div className={isMobile ? "mb-8 lg:hidden" : ""}>
      <h3
        className={`font-semibold text-gray-900 mb-4 ${
          isMobile ? "text-lg" : "text-sm uppercase tracking-wider"
        }`}
      >
        Join Our Newsletter & Enjoy 10% Off
      </h3>
      <form onSubmit={handleNewsletterSubmit} className="mb-6">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={isMobile ? "Your email" : "madp.dev@firegroup.io"}
            className={`flex-1 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm ${
              isMobile ? "py-3 bg-white" : "py-2"
            }`}
            required
          />
          <button
            type="submit"
            className={`px-4 bg-gray-900 text-white rounded-r-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 ${
              isMobile ? "py-3" : "py-2"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FooterNewsletter;
