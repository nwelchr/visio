import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { downloadImage } from "@/lib/utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] absolute bottom-0 left-0 right-0 bg-slate-800 m-2 p-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-emerald-700 flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-gray-300 text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none bg-transparent border-none"
          >
            <ArrowDownTrayIcon className="w-6 h-6 object-contain text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
