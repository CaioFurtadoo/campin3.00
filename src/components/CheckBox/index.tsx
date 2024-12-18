import React, { useState } from "react";
import CheckSvg from "../../assets/check.svg"; // Importação do SVG

export const CheckBox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex gap-1">
      <label className="relative flex items-center gap-2 cursor-pointer text-textBase text-[15px] select-none">
        <input
          type="checkbox"
          className="absolute opacity-0 w-0 h-0 peer"
          checked={isChecked}
          onChange={handleChange}
          />
        <span
          className={`relative flex items-center justify-center w-[22px] h-[22px] rounded-md border border-textBase bg-formBackground transition-colors peer-checked:bg-primaryColor peer-checked:border-none peer-hover:bg-background`}
          >
          <img
            src={CheckSvg}
            alt="Check"
            className={`w-[18px] h-[18px] ${isChecked ? "block" : "hidden"}`}
            />
        </span>
            Lembre-me
      </label>
    </div>
  );
};
