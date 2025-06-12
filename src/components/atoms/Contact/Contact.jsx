export default function Contact() {
  const scrollToContact = () =>{
    const section = document.getElementById('contact');
    if(section){
      section.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <button onClick={scrollToContact}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
      Contáctame
    </button>
  );
};