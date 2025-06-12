import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ButtonUp() {
const [isVisible, setIsVisible] =  useState(false);
const minScrollHeight = 1;
const scrollToTop = () =>{
    window.scrollTo({top:0, behavior: 'smooth'});
};
useEffect( () =>{
    const toggleVisibility = () =>{
       window.pageYOffset > minScrollHeight  ? setIsVisible(true) : setIsVisible(false);
    }
    window.addEventListener('scroll', toggleVisibility);
    return() => window.removeEventListener('scroll', toggleVisibility);
}, []);

return (
    <button onClick={scrollToTop}
    className={`fixed bottom-30 right-10 w-10 h-10 flex items-center justify-center cursor-pointer bg-gray-800 text-white p-3 rounded-full
    shadow-lg hover:bg-gray-700 transition-all z-50 ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'} transition-all duration-300`}
    aria-label='Volver arriba'>
        <FontAwesomeIcon icon={faArrowUp}/>
    </button>
  )
}
