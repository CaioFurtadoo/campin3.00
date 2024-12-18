import { useState } from "react";
import EyeCloseImg from "../../assets/eye-slash.svg";
import EyeImg from "../../assets/eye.svg";

interface InputProps {
  label: string;
  type: "text" | "email" | "senha";
  placeholder: string;
  InputImg: string;
  InputImgFocus: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  InputImg,
  InputImgFocus,
}) => {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleVisibilityToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  return (
    <label className="flex gap-0.5 w-[100%] flex-col">
      {label}
      <div className="w-[100%] flex items-center relative">
        <input
          type={type === "senha" ? (isVisible ? "text" : "password") : type}
          placeholder={placeholder}
          className="border-solid border border-[#868686] py-3 px-0 pl-10 rounded bg-formBackground text-[14px] outline-none text-textBase placeholder:text-[#7E838D] w-[100%] focus:border-2 focus:border-solid focus:border-primaryColor"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <img
          className="absolute left-3 items-center"
          src={isFocused ? InputImgFocus : InputImg}
          alt="imagem do input"
        />

        {type === "senha" && (
          <button
            type="button"
            onClick={handleVisibilityToggle}
            className="absolute right-2 bg-formBackground w-6 h-6 items-center hover:scale-110 transition duration-500"
          >
            <img
              src={isVisible ? EyeImg : EyeCloseImg}
              alt="Mostrar senha"
              className="w-5 h-5"
            />
          </button>
        )}
      </div>
    </label>
  );
};

