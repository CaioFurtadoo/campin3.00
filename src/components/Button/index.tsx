import React from "react";

interface ButtonProps {
  text: string; 
  bgColor?: string; 
  textColor?: string; 
  hoverEffect?: boolean; 
  fullWidth?: boolean; 
  borderRadius?: string; 
  onClick?: () => void;
  width?: string;
  padding?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  bgColor = "bg-primaryColor", 
  textColor = "text-[#473404]", 
  hoverEffect = true, 
  fullWidth = true, 
  borderRadius = "rounded-lg",
  onClick,
  width,
  padding,
}) => {
  return (
    <button
      className={`
        ${bgColor} 
        ${textColor} 
        ${hoverEffect ? "transition-transform duration-300 hover:scale-105" : ""}
        ${fullWidth ? "w-full" : width}
        ${padding}
        ${borderRadius}
        flex items-center justify-center
        h-[51px] font-semibold text-[18px]
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
