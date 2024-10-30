import Link from "next/link";
import Image from "next/image";
const GaleriePost = (props) => {
  if (props)
    return (
      <div className="w-full slide-right my-12 mx-auto rounded-2xl flex flex-col gap-4  shadow-md shadow-black/10 md:w-4/12 md:p-8 p-4">
        <Link
          href="/galerie"
          className=" flex items-center justify-start gap-2 text-black/50"
        >
          <svg
            className="w-6 h-6 text-black/50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
          Inapoi
        </Link>

        <div
          className=" mx-auto  w-full h-80 md:w-full md:h-96 p-1 rounded-md"
          style={{
            backgroundImage: `url(/${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <h1 className="text-2xl slide-in font-semibold text-black">
          {props.title}
        </h1>
        <p className="text-black slide-in">{props.text}</p>

        {/* <div className="border-t-2 border-slate-300 flex items-end justify-end">
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:rounded-2xl transition-all">
              Like
            </button>
            <button className="bg-green-500 px-4 py-2 rounded-md text-white hover:rounded-2xl transition-all">
              Postare
            </button>
          </div>
        </div> */}
      </div>
    );
};

export default GaleriePost;
