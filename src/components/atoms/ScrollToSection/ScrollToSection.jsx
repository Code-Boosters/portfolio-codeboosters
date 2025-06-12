export default function ScrollToSection({targetId, label = "Ir a la sección"}) {
  const handleClick = () =>{
    const section =  document.getElementById(targetId);
    if(section){
        section.scrollIntoView({behavior:'smooth'});
    }
  };
  
    return (
    <button onClick={handleClick}
    className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer mt-4 ml-4 hover:bg-green-700 transition">
      {label}
    </button>
  );
};