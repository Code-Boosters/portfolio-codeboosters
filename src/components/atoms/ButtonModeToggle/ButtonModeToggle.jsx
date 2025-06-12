import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../../context/ThemeContext";

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-800 dark:text-white hover:scale-110 transition"
      aria-label="Cambiar tema"
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-lg" />
    </button>
  );
}