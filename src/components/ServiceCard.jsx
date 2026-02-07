export default function ServiceCard({ titulo, descripcion, img, }) {


    return <>

        <article className="w-[420px] mt-8 rounded-xl ml-auto mr-auto flex border-2 border-black h-auto bg-[#57574C] transition-transform duration-200 hover:scale-105 cursor-pointer">
            <section className="flex flex-col items-center justify-start w-full">
                <div className="w-full border-b-2">
                    <h2 className="font-serif font-light bg-gradient-to-r from-[#B5961E] via-[#E6C97A] to-[#B8963E] bg-clip-text text-transparent transition-transform
                               duration-400 ease-in-out italic text-2xl text-center italic">
                        {titulo}
                    </h2>
                </div>

                <div className="w-full flex flex-col">
                    <div className="w-full ml-auto mr-auto">
                        <img className="w-full h-[300px]" src={img} alt="" />
                    </div>
                    <div className="w-full p-3 border-t-2">
                        <p className="text-white">{descripcion}</p>
                    </div>
                </div>
            </section>
        </article>

    </>

}