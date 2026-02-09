import { useState } from "react"
import { services } from "../../asyncmock"
import { enviarForm } from "../../asyncmockForms"

export default function FormularioContactoComponent() {

    const serviciosGenerales = [...new Set(services.map(serv => serv.nombre))]

    const [servicioSeleccionado, setServicioSeleccionado] = useState("")

    const [contactoForm, setContactoForm] = useState({
        nombre: "",
        apellido: "",
        servicio: "",
        subservicio: "",
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

        <form className="w-auto h-[auto] p-6 rounded-xl shadow-md bg-[#57574C] mt-12 ml-auto mr-auto
                        md:w-[700px] 
                        2xl:w-[800px] "
            onSubmit={handleSubmit}>

            <h2 className="text-2xl text-center font-serif font-light bg-gradient-to-r from-[#B8963E] via-[#E6C97A] to-[#B8963E] bg-clip-text text-transparent transition-transform">Reserva tu turno</h2>
            <section className="flex justify-between mt-2">

                <input type="text"
                    name="nombre"
                    className="bg-white rounded-lg w-[48%] h-12 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Nombre"
                    onChange={handleChange} />


                <input type="text"
                    name="apellido"
                    className="bg-white rounded-lg w-[48%] h-12 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Apellido"
                    onChange={handleChange} />

            </section>

            <section className="flex justify-between mt-4">

                <select onClick={(e) => setServicioSeleccionado(e.target.value)}
                    type="text"
                    className="bg-white rounded-lg w-[48%] h-12 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Correo electrónico"
                    name="servicio"
                    onChange={handleChange}
                >

                    <option value="" hidden>Elegí un servicio</option>

                    {serviciosGenerales.map(nombre => (
                        <option id="servicio" key={nombre} value={nombre}>
                            {nombre}
                        </option>
                    ))}
                </select>

                <select className="bg-white rounded-lg w-[48%] h-12 pl-4"
                    name="subservicio"
                    onChange={handleChange}>

                    <option value="" hidden>
                        Elegí un servicio de {servicioSeleccionado}
                    </option>

                    {services
                        .filter(serv => serv.nombre === servicioSeleccionado)
                        .map(serv => (
                            <option key={serv.id} value={serv.title}>
                                {serv.title}
                            </option>
                        ))}

                </select>

            </section>
            <section>
                <input type="text"
                    className="bg-white rounded-lg w-[100%] mt-4 h-12 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Correo electrónico"
                    name="email"
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

            <button className="bg-black text-white text-lg rounded-lg sm:w-[15%] mt-4 h-12 transition-transform duration-200 hover:scale-105 cursor-pointer"
                type="submit"
            >Continuar</button>

        </form>


    </>
}