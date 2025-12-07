'use client'

import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";


export default function BackButton() {
  const { back } = useRouter();
  return (
    <button onClick={back} className="flex group font-heading items-center hover:cursor-pointer  hover:text-gray-900">
      <CircleArrowLeft className="mr-2 group-hover:translate-x-[-2px] transition-transform text-tertiary" />
      Tilbake
    </button>
  );
}