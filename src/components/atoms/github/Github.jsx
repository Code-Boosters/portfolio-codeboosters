import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
export default function Github({url = "https://github.com/"}) {
  return (
    <a href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-gray-800 dark:bg-white dark:text-black   text-white px-4 py-2 rounded hover:bg-gray-700 transition">
      <FontAwesomeIcon icon={faGithub} className="text-lg" />
      Github
    </a>
  )
}
