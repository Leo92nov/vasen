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
            <FormularioSingleServ></FormularioSingleServ>
        </section>
    </>
}