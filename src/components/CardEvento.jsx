import React from "react";

const CardEvento = ({ evento }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {evento.logo ? (
          <img
            className="w-full"
            src={evento.logo.url}
            alt="Sunset in the mountains"
          />
        ) : null}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{evento.name.text}</div>
          <p className="text-gray-700 text-base">
            {evento.description.text.substring(0, 100)}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a
            className="p-3 w-full text-white font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded hover:bg-gradient-to-br hover:from-green-300 hover:via-blue-500 hover:to-purple-600 "
            href={evento.url}
            target="_blank"
            rel="noreferrer"
          >
            Mas Información
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardEvento;
