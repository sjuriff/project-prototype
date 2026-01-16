"use client";
import { useState } from "react";
import VippsIcon from "../vipps-logo";
import KlarnaIcon from "../klarna-logo";
import { CreditCard } from "lucide-react";
import AppleIcon from "../apple-logo";
import { FaCcApplePay } from "react-icons/fa"
import { FaGooglePay } from "react-icons/fa"
import { FaCcPaypal } from "react-icons/fa";

interface RadioButtonsProps {
  value: string;
  setValue: (value: string) => void;
}

export default function RadioExample({ value, setValue }: RadioButtonsProps) {



  const Option = ({ value: optionValue, children }: any) => (
    <label className="relative  cursor-pointer">
      <input
        type="radio"
        name="payment"
        value={optionValue}
        checked={value === optionValue}
        onChange={(e) => setValue(e.target.value)}
        className="peer sr-only"
      />

      <div
        className="
        flex items-center justify-center gap-2 
        px-4 py-2
        border
        border-transparent
        transition-all duration-300 ease-in-out
        peer-checked:scale-110
        rounded-lg
        peer-checked:bg-surface
        peer-checked:shadow-md
        peer-checked:border-tertiary
        
        h-16 flex-col
        hover:scale-105
        
      "
      >
        {children}

      </div>
    </label>
  );

  return (
    <div className="w-full  flex flex-col items-center">
      <div className="flex w-3/4 bg-white shadow px-4 rounded-t-lg  gap-8 py-8">

        <Option value="vipps">
          <div className="mt-1">
            <VippsIcon height={70} width={70} />
          </div>
        </Option>


        <Option value="klarna">

          <div className="mt-1">
            <KlarnaIcon height={70} width={70} />
          </div>
        </Option>


        <Option value="credit-card">
          <div className=" font-body flex items-center justify-center gap-2">

            <CreditCard className="text-primary-text h-8 w-8" />
            <p className="text-sm">Kort</p>

          </div>
        </Option>


      </div>



      <div className="flex  shadow-md items-center justify-center w-3/4 rounded-b-lg px-4  gap-8 py-4">

        <Option value="apple-pay">
          <FaCcApplePay className="text-primary-text h-8 w-8" />
        </Option>


        <Option value="google-pay">

          <div className="flex  h-full items-center justify-center gap-2">
            <FaGooglePay className="text-primary-text h-8 w-8" />

          </div>
        </Option>


        <Option value="paypal">
          <div className="flex  h-full items-center justify-center gap-2">
            <FaCcPaypal className="text-primary-text h-8 w-8" />

          </div>
        </Option>
      </div>



    </div>
  );
}