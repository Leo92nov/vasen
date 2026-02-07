/* export default function Testimonio({ nombre, texto, rating, servicio, img }) {

  return (<article className="bg-[#57574C] md: p-2 p-6 rounded-xl w-[400px]">
          <img src={img} alt="" />
          <p className="">{rating}</p>
          <p className="text-l mt-3 text-gray-300">{texto}</p>
          <div className="mt-4 text-xl opacity-70 text-white"> {nombre} · {servicio} </div>
        </article>);
}
 */
export default function Testimonio({ nombre, texto, rating, servicio, img }) {
  return (
    <article
      className="
        bg-[#57574C]
        rounded-xl

        /* Desktop (default, NO se toca) */
        w-[400px] p-6

        /* Tablet 1024px */
        lg:w-[360px] lg:p-5

        /* Tablet 768px */
        md:w-full md:p-4

        /* Mobile 375px */
        w-full sm:p-4
      "
    >
      <img
        src={img}
        alt=""
        className="
          rounded-lg

          /* Mobile */
          max-h-[180px]

          /* Tablet */
          md:max-h-[200px]

          /* Desktop */
          lg:max-h-none
        "
      />

      <p className="mt-2">{rating}</p>

      <p
        className="
          mt-3 text-gray-300

          /* Desktop */
          text-l

          /* Tablet */
          md:text-base

          /* Mobile */
          text-sm
        "
      >
        {texto}
      </p>

      <div
        className="
          mt-4 text-white opacity-70

          /* Desktop */
          text-xl

          /* Tablet */
          md:text-lg

          /* Mobile */
          text-base
        "
      >
        {nombre} · {servicio}
      </div>
    </article>
  );
}
