import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import ButtonModeToggle from '../ButtonModeToggle/ButtonModeToggle';

export default function LanguageSubmenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Botón principal */}
      <button
        onClick={toggleMenu}
        className="flex items-center gap-3 px-4 py-2 cursor-pointer bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        <FontAwesomeIcon icon={faGlobe} className='text-gray-900 dark:text-white text-lg'/>
        <FontAwesomeIcon 
          icon={isOpen ? faChevronUp : faChevronDown} 
          className="text-xs text-gray-900 dark:text-white" 
        />
      </button>

      {/* Submenú */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-14 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 border border-gray-200 dark:border-gray-600">
          <ul>
            <li>
              <button
                className="w-full text-left cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md text-gray-900 dark:text-white"
                onClick={() => setIsOpen(false)}
              >
               ES
              </button>
            </li>
            <li className="border-t border-gray-200 dark:border-gray-600">
              <button
                className="w-full text-left cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md text-gray-900 dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                EN
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}