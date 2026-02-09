import { useState } from "react";
import NavButtonComponent from "./NavButtonComponent";
import NavServiciosComponent from "./NavServiciosComponent";
import NavServFacialComponent from "./NavServFacialComponent.jsx";
import NavServAparatologiaComponent from "./NavServAparatologiaComponent.jsx";
import NavServMasajesComponent from "./NavServMasajesComponent.jsx";
import NavServCejasComponent from "./NavServCejasComponent.jsx";
import NavServManicuriaComponent from "./NavServManicuriaComponent.jsx";
import NavServMedicinaComponent from "./NavServMedicinaComponent.jsx";
import { Link } from "react-router-dom";

export default function NavBarComponent() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full flex justify-between items-center mb-6 px-8 relative">

            {/* LOGO */}
            <Link to="/">
                <img className="h-20 w-auto" src="/logov.png" alt="" />
            </Link>

            {/* MENU DESKTOP (solo desde 2xl) */}
            <section className="hidden 2xl:flex gap-8">
                <NavButtonComponent to="/">Inicio</NavButtonComponent>
                <NavServFacialComponent to="../Facial" state={{ keyword: "Facial" }}>Facial</NavServFacialComponent>
                <NavServiciosComponent to="../Corporal" state={{ keyword: "Corporal" }}>Corporal</NavServiciosComponent>
                <NavServAparatologiaComponent to="../Aparatologia" state={{ keyword: "Aparatologia" }}>Aparatología</NavServAparatologiaComponent>
                <NavServMasajesComponent to="../Masajes" state={{ keyword: "Masajes" }}>Masajes</NavServMasajesComponent>
                <NavServCejasComponent to="../Cejas" state={{ keyword: "Cejas" }}>Cejas/Pestañas</NavServCejasComponent>
                <NavServManicuriaComponent to="../Manicuria" state={{ keyword: "Manicuría" }}>Manicuría</NavServManicuriaComponent>
                <NavServMedicinaComponent to="../Medicina" state={{ keyword: "Medicina" }}>Medicina</NavServMedicinaComponent>
                <NavButtonComponent to="/Nosotras">Nosotras</NavButtonComponent>
                <NavButtonComponent to="/Contacto">Contacto</NavButtonComponent>
            </section>

            {/* HAMBURGUESA (visible debajo de 2xl) */}
            <button
                className="2xl:hidden text-amber-500 text-3xl"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            {/* MENU MOBILE */}
            {open && (
                <div className="absolute top-16 right-6 bg-[#57574C] rounded-xl pl-2 flex flex-col items-start shadow-xl z-50 2xl:hidden">

                    <div onClick={() => setOpen(false)}>
                        <NavButtonComponent to="/">Inicio</NavButtonComponent>
                    </div>

                    <div onClick={() => setOpen(false)}>
                        <NavServFacialComponent to="../Facial" state={{ keyword: "Facial" }}>Facial</NavServFacialComponent>
                    </div>

                    <div onClick={() => setOpen(false)}>
                        <NavServiciosComponent to="../Corporal" state={{ keyword: "Corporal" }}>Corporal</NavServiciosComponent>
                    </div>

                    <div onClick={() => setOpen(false)}>
                        <NavServAparatologiaComponent to="../Aparatologia" state={{ keyword: "Aparatologia" }}>Aparatología</NavServAparatologiaComponent>
                    </div>

                    <div onClick={() => setOpen(false)}>
                        <NavServMasajesComponent to="../Masajes" state={{ keyword: "Masajes" }}>Masajes</NavServMasajesComponent>
                    </div>

                    <div onClick={() => setOpen(false)}>
                        <NavServCejasComponent to="../Cejas" state={{ keyword: "Cejas" }}>Cejas/Pestañas</NavServCejasComponent>
                    </div>

                    <div onClick={() => setOpen(false)}>
                        <NavServManicuriaComponent to="../Manicuria" state={{ keyword: "Manicuria" }}>Manicuría</NavServManicuriaComponent>
                    </div>

                    <div onClick={() => setOpen(false)}>
                        <NavServMedicinaComponent to="../Medicina" state={{ keyword: "Medicina" }}>Medicina</NavServMedicinaComponent>
                    </div>

                    <div onClick={() => setOpen(false)}>
                        <NavButtonComponent to="/Nosotras">Nosotras</NavButtonComponent>
                    </div>

                    <div onClick={() => setOpen(false)}>
                        <NavButtonComponent to="/Contacto">Contacto</NavButtonComponent>
                    </div>

                </div>
            )}

        </nav>
    );
}