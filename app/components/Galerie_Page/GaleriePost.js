import Link from "next/link";
import Image from "next/image";
const GaleriePost = (props) => {
  if (props)
    return (
      <div className="w-full mx-auto rounded-2xl flex flex-col gap-4  shadow-md shadow-black/10 md:w-4/12 md:p-8 p-4">
        <Link href="/galerie" className="underline text-black/50">
          Inapoi
        </Link>

        <Image
          className=" mx-auto  w-full h-80 md:w-full md:h-96 p-1 rounded-md"
          src={`/${props.image}`}
          width={500}
          height={500}
          priority
        />
        <h1 className="text-2xl font-semibold text-black">{props.title}</h1>
        <p className="text-black">{props.text}</p>

        <div className="border-t-2 border-slate-300 flex items-end justify-end">
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-500 px-4 py-2 rounded-md text-white font-semibold hover:rounded-2xl transition-all">
              Like
            </button>
            <button className="bg-green-500 px-4 py-2 rounded-md text-white font-semibold hover:rounded-2xl transition-all">
              Share
            </button>
          </div>
        </div>
      </div>
    );
};

export default GaleriePost;
