import { useParams } from "react-router-dom"
import { getFacialServ } from "../asyncmock"
import { useEffect, useState } from "react"

export default function SingleServ() {

    const { servid } = useParams()

    const [servicio, setServicio] = useState({})

    useEffect(() => {
        setServicio(getFacialServ(servid))
    })

    return <>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-white italic mt-8 mb-8 text-3xl">{servicio.title}</h1>
            <section className="flex w-[70%]">
                <img className="w-[600px] h-[500px] pr-4" src={servicio.image} alt="" />
                <p className="text-white w-[50%] text-lg pl-6 whitespace-pre-line">{servicio.description}</p>
            </section>
        </div>
    </>
}