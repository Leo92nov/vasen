import { useState } from "react"
import { useParams } from "react-router-dom"
import { getIdServices } from "../asyncmock"
import { enviarForm } from "../asyncmockForms"

export default function FormularioSingleServ() {


    const { servid } = useParams()

    const servicio = getIdServices(Number(servid))



    const [contactoForm, setContactoForm] = useState({
        nombre: "",
        apellido: "",
        servicio: servicio.nombre,
        subservicio: servicio.title,
        email: "",
        telefono: "",

    })

    const handleChange = (e) => {
        setContactoForm({
            ...contactoForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const contactoFormCreado = {
            id: crypto.randomUUID(),
            ...contactoForm
        }
        console.log(contactoFormCreado);
        await enviarForm(contactoFormCreado)
    }


    return <>

        <form className="w-[800px] h-[auto] p-6 rounded-xl shadow-md bg-[#57574C] mt-12 ml-auto mr-auto"
            onSubmit={handleSubmit}>
            <h2 className="text-xl text-center mb-4 text-white">Reservá tu turno</h2>

            <section className="flex justify-between">
                <input
                    type="text"
                    name="nombre"
                    className="bg-white rounded-lg w-[48%] h-12 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Nombre"
                    onChange={handleChange} />
                <input
                    type="text"
                    name="apellido"
                    className="bg-white rounded-lg w-[48%] h-12 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Apellido"
                    onChange={handleChange} />
            </section>

            <section>
                <input
                    type="text"
                    name="email"
                    className="bg-white rounded-lg w-[100%] mt-4 h-12 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Correo electrónico"
                    onChange={handleChange} />
            </section>

            <section>
                <input
                    id="telefono"
                    type="tel"
                    placeholder="Tel: +54 9 341 234-5678"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white mt-4"
                    name="telefono"
                    onChange={handleChange}
                />
            </section>

            <button
                type="input"
                className="bg-black text-white text-lg rounded-lg w-[15%] mt-4 h-12">

                Continuar
        </button>



    </form >

</>
}
