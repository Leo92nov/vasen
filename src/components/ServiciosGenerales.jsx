import { Link } from "react-router-dom";
import { getServices } from "../asyncmock"
import { useLocation } from "react-router-dom";
import { services } from "../asyncmock"


export default function ServiciosGenerales() {

    const location = useLocation()
    const keyword = location.state?.keyword
    console.log(keyword);

    const categoriafiltrada = services.find(servicio => servicio.nombre == keyword)

    console.log(categoriafiltrada);


    const serviciosF = getServices(categoriafiltrada.categoria)
    console.log(serviciosF);


    return <>


        <h1 className="text-center text-white text-3xl pt-8">{keyword} </h1>



        <section className="h-auto w-[70%] mb-16 flex justify-start flex-wrap ml-auto mr-auto gap-8">

            {serviciosF.map((serv) => (<article className="w-[400px] mt-8 rounded-xl ml-4 flex border-2 border-black h-auto bg-[#57574C] transition-transform duration-200 hover:scale-105 cursor-pointer">
                <Link to={`/Facial/${serv.id}`}>
                    <section className="flex flex-col items-center w-full">
                        <div className="w-full border-b-2">
                            <h2 className="font-serif font-light bg-gradient-to-r from-[#B5961E] via-[#E6C97A] to-[#B8963E] bg-clip-text text-transparent transition-transform
                            duration-400 ease-in-out italic text-2xl text-center italic">{serv.title}
                            </h2>
                        </div>

                        <div className="w-full flex flex-col">
                            <div className="w-full ml-auto mr-auto">
                                <img className="w-full h-[300px]" src={serv.image} alt="" />
                            </div>
                            <div className="w-full p-3 border-t-2">
                                <p className="text-white">{serv.descripcionR}</p>
                            </div>
                        </div>
                    </section>
                </Link>
            </article>)
            )}
        </section>

    </>
}