import { useParams } from "react-router-dom"
import { getIdServices } from "../asyncmock"
import { useEffect, useState } from "react"

export default function SingleServ() {

    const { servid } = useParams()

    const [servicio, setServicio] = useState({})

    useEffect(() => {
        setServicio(getIdServices(Number(servid)))
    }, [servid])

    return <>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-white italic mt-8 mb-8 text-3xl">{servicio.title}</h1>
            <article className="flex w-[70%]">
                <section className="rounded-lg bg-yellow-100 w-[48%] h-[525px]">
                    <img className="w-[100%] h-[525px] rounded-lg" src={servicio.image} alt="" />
                </section>
                <p className="text-white w-[48%] text-lg pl-6 whitespace-pre-line">{servicio.description}</p>
            </article>
        </div>
        <div className="h-12 bg-[#1f1f19]">
        </div>
        <div className="h-[2px] w-[72%] mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>



        <section>
            <form className="w-[800px] h-[auto] p-6 rounded-xl shadow-md bg-[#57574C] mt-12 ml-auto mr-auto">

                <h2 className="text-xl text-center mb-4 text-white">Reserva tu turno para {servicio.title}</h2>
                <section className="flex justify-between">
                    <input type="text" className="bg-white rounded-lg w-[48%] h-12 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Nombre" />
                    <input type="text" className="bg-white rounded-lg w-[48%] h-12 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Apellido" />
                </section>

                <section>
                    <input type="text" className="bg-white rounded-lg w-[100%] mt-4 h-12 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Correo electrónico" />
                </section>

                <section>
                    <input
                        id="telefono"
                        type="tel"
                        placeholder="+54 9 11 1234-5678"
                        pattern="^\+?\d{0,3} ?\d{0,3} ?\d{4,5}-?\d{4}$"
                        className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white mt-4"
                    />
                </section>

                <section>
                    <input type="text" className="bg-white rounded-lg w-[100%] mt-4 h-12 pl-4" placeholder="Correo electrónico" />
                </section>

                <button className="bg-black text-white text-lg rounded-lg w-[15%] mt-4 h-12">Continuar</button>



            </form>
        </section>
    </>
}