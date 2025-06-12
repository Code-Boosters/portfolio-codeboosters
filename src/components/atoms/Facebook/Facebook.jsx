import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function Facebook({url="https://facebook.com"}) {
  return (
    <a href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full w-8 h-8 hover:bg-blue-700 transition">
        <FontAwesomeIcon icon={faFacebook}/>
    </a>
  )
}