import React from "react";
import ButtonWhatsApp from "./components/atoms/ButtonWhatsApp/ButtonWhatsApp";

const saludo = ()=>{
    return (
    <>
        <h1 class="text-3xl font-bold underline bg-red-500 text-center py-2 text-white">
        Hello world!
        </h1>
        <ButtonWhatsApp phoneNumber={3154488668} />
    </>
    )
}

export default saludo