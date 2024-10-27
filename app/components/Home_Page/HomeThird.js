"use client";
import Link from "next/link";
const HomeThird = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:justify-center md:items-center md:py-28 md:px-40 py-12 px-8">
      {/* left side */}
      <div className="flex flex-col md:w-7/12 w-full">
        <div className="text-2xl pb-8 font-semibold  text-center md:text-left md:text-5xl md:p-4">
          <h1>Descoperiți Meniul Nostru</h1>
        </div>
        <div className="md:hidden flex justify-center mb-8 md:w-1/2">
          <div
            className="grid justify-self-start w-44 h-44 bg-black rounded-full border-r-8 border-blue-700"
            style={{
              backgroundImage: "url(/second-circle.png)",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <hr className="bg-gray-300"></hr>
        <div className="p-4">
          <p>
            Răsfățați-vă simțurile cu selecția noastră diversificată de
            preparate grecești. Fie că sunteți în căutarea unei salate
            proaspete, a unui aperitiv savuros sau a unui fel principal
            delicios, meniul nostru are ceva pentru fiecare gust. Alegeți din
            preparate inspirate din tradiția grecească, fiecare creat pentru a
            vă oferi o experiență culinară de neuitat.
          </p>
        </div>
        <Link href="/meniu" className="flex items-end justify-end">
          <button className="flex self-end underline p-2 hover:text-blue-700 transition duration-300">
            Vezi meniul
          </button>
        </Link>
      </div>

      {/* right side */}
      <div className="hidden md:flex justify-center w-1/2">
        <div
          className="grid justify-self-start w-56 h-56 bg-black rounded-full border-r-8 border-blue-700"
          style={{
            backgroundImage: "url(/second-circle.png)",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HomeThird;
