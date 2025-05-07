import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import React from 'react';

export default function ButtonWhatsApp({
  phoneNumber,
  message = "Hola, necesito ayuda con mi proyecto"
}) {
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl animate-pulse hover:animate-none transition-all duration-300 transform hover:scale-110"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
    </a>
  );
}