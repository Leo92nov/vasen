export default function FormularioSingleServ (){

    return <>
    
     <form className="w-[800px] h-[auto] p-6 rounded-xl shadow-md bg-[#57574C] mt-12 ml-auto mr-auto">

                <h2 className="text-xl text-center mb-4 text-white">Reserva tu turno</h2>
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
                        placeholder="Tel: +54 9 341 234-5678"
                        pattern="^\+?\d{0,3} ?\d{0,3} ?\d{4,5}-?\d{4}$"
                        className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white mt-4"
                    />
                </section>

                <section>
                    <input type="text" className="bg-white rounded-lg w-[100%] mt-4 h-12 pl-4" placeholder="Correo electrónico" />
                </section>

                <button className="bg-black text-white text-lg rounded-lg w-[15%] mt-4 h-12">Continuar</button>



            </form>

    </>
}