import { useState } from "react"

export default function DraftCard({Faction}){

    const [isSelected, SetIsSelected] = useState(false)

    return (
  <div
    className={`relative h-20 w-23 rounded-xl border px-2 pb-2 text-center transition
      ${isSelected
        ? "bg-red-500 border-red-600 text-white hover:bg-red-600"
        : "bg-green-400 border-green-600 text-black hover:bg-green-600"}
      hover:shadow-md hover:scale-[1.02]
    `}
    onClick={() => SetIsSelected(prev => !prev)}
  >

    {/* Faction Name */}
    <h2 className="mt-4 flex h-full items-center justify-center text-xs leading-tight break-words line-clamp-3">
      {Faction}
    </h2>
  </div>
);

}