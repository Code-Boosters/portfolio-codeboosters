import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

export default function Preview({url="https://google.com/"}) {
  return (
    <a href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-orange-800 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
        <FontAwesomeIcon  icon={faGlobe}/>
        ver demo
        
    </a>
  )
}