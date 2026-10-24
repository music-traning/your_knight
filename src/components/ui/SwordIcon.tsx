import React from "react";

interface SwordIconProps {
  className?: string;
  glow?: boolean;
}

export const SwordIcon: React.FC<SwordIconProps> = ({
  className = "w-6 h-6",
  glow = true,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${
        glow ? "drop-shadow-[0_0_8px_rgba(255,0,127,0.85)]" : ""
      }`}
      aria-hidden="true"
    >
      {/* Metallic & Neon Cyber Blade */}
      <path
        d="M19.5 3.5L20.5 4.5L19 9L10.5 17.5L6.5 13.5L15 5L19.5 3.5Z"
        fill="url(#blade-gradient)"
        stroke="#FF007F"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Inner core line */}
      <path
        d="M18.5 5.5L9.5 14.5"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Crossguard */}
      <path
        d="M4.5 11.5L12.5 19.5"
        stroke="#E4E4E7"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M5.5 12.5L11.5 18.5"
        stroke="#FF007F"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Hilt & Pommel */}
      <path
        d="M7.5 16.5L4 20"
        stroke="#D4D4D8"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="3.5" cy="20.5" r="1.5" fill="#FF007F" />
      <defs>
        <linearGradient
          id="blade-gradient"
          x1="19.5"
          y1="3.5"
          x2="8"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#D4D4D8" />
          <stop offset="100%" stopColor="#FF007F" stopOpacity="0.85" />
        </linearGradient>
      </defs>
    </svg>
  );
};
