import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";



export const MainPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-12 h-[100vh] w-[100vw]">
      <Link to="/login">
        <Button 
         text="LOGIN"
         bgColor="bg-[#FA5C6C]"
         textColor="text-red-950"
         fullWidth={false}
         padding="py-14"
         width="w-96"
        />
      </Link>

      <Link to="/register">
        <Button 
         text="REGISTRO"
         bgColor="bg-[#87ff50]"
         textColor="text-red-950"
         fullWidth={false}
         padding="p-12"
         borderRadius="rounded-full"
        />
      </Link>      
    </div>
  );
};