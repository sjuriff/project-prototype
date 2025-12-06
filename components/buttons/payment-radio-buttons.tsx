"use client";
import { useState } from "react";
import VippsIcon from "../vipps-logo";
import KlarnaIcon from "../klarna-logo";

export default function RadioExample() {
  const [value, setValue] = useState("option1");

  return (
    <div>
      <h3 className="text-primary-text font-heading">Velg en betalingsmetode</h3>
      <div className="flex  gap-8 py-8">

        <label className="flex gap-2 h-8  items-center justify-center">
          <input
            type="radio"
            name="klarna"
            value="klarna"
            checked={value === "klarna"}
            onChange={(e) => setValue(e.target.value)}
          />

          <KlarnaIcon height={70} width={70} />

        </label>



        <label className="flex gap-2  h-8 items-center justify-center">
          <input
            type="radio"
            name="vipss"
            value="vipps"
            checked={value === "vipps"}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="mt-1">
            <VippsIcon height={70} width={70} />
          </div>
        </label>

      </div>


      
    </div>
  );
}