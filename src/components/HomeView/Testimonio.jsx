export default function Testimonio({ nombre, texto, rating, servicio,img }) {
  return (
    <article className="bg-[#57574C] p-6 rounded-xl">
      <img src={img} alt="" />
      <p className="">{rating}</p>
      <p className="text-l mt-3 text-gray-300">{texto}</p>
      <div className="mt-4 text-xl opacity-70 text-white">
        {nombre} · {servicio}
      </div>
    </article>
  );
}
