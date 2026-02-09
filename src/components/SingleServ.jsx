import { useParams } from "react-router-dom"
import { getIdServices } from "../asyncmock"
import { useEffect, useState } from "react"
import FormularioSingleServ from "./FomularioSingleServ"

export default function SingleServ() {

    const { servid } = useParams()

    const [servicio, setServicio] = useState({})

    useEffect(() => {
        setServicio(getIdServices(Number(servid)))
    }, [servid])

    return <>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-white italic mt-8 mb-8 text-3xl">{servicio.title}</h1>
            <article className="2xl:flex 2xl:w-[70%] sm:w-[100%] lg:w-[90%] p-2" >
                <section className="2xl:rounded-lg 2xl:w-[48%] 2xl:h-[525px] flex w-[100%] rounded-lg">
                    <img className="w-[100%] h-[525px] rounded-lg sm:w-[100%]" src={servicio.image} alt="" />
                </section>
                <p className="text-white 2xl:w-[48%] text-lg 2xl:pl-6 whitespace-pre-line 2xl:pt-0 pt-4">{servicio.description}</p>
            </article>
        </div>
        <div className="h-12 bg-[#1f1f19]">
        </div>
        <div className="h-[2px] w-[72%] mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>



        <section>
            <FormularioSingleServ></FormularioSingleServ>
        </section>
    </>
}