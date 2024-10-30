"use client";

import Link from "next/link";
import Image from "next/image";

const HomeFirst = () => {
  return (
    <div className="flex flex-row justify-center">
      {/* left side */}
      <div className="flex flex-col  bg-white text-black md:w-1/2 w-full md:pl-8 md:pr-20 md:pt-36 gap-10 md:pb-8 px-8 pt-36 pb-24">
        <h1 className="text-2xl slide-in md:text-5xl text-left font-semibold">
          Descoperă gusturile grecești la Kvala{" "}
        </h1>
        <p className="slide-in">
          La Kvala, te invităm să te bucuri de o experiență culinară autentică,
          inspirată de tradițiile grecești. Fiecare preparat este pregătit cu
          cele mai proaspete ingrediente și o pasiune profundă pentru
          gastronomie.
        </p>

        <div className="grid grid-cols-3 justify-items-center w-full">
          <Link
            href="/meniu"
            className="flex justify-center border-r-2 border-b-2 border-slate-300 w-full col-span-2"
          >
            <button className="rounded-full slide-left bg-blue-700 text-white h-28 w-28 p-4 mb-6 hover:scale-110 transition duration-300">
              Explorează
              <br></br>
              Meniul
            </button>
          </Link>
          <div className="flex flex-col justify-center items-center bg-blue-30 border-b-2 border-slate-300 w-full">
            <p className="pl-4 md:text-md text-xs slide-right">
              782 review-uri pozitive
            </p>
          </div>
          <div className="grid grid-cols-2 items-center justify-end gap-2 bg-cyan-30 w-full border-r-2 border-slate-300 col-span-2">
            <div
              className="grid justify-self-start w-32 h-32 slide-left bg-blue-700 rounded-full border-l-8 border-blue-700 mt-6 ml-4"
              style={{
                backgroundImage: "url(/first-circle.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="lg:block hidden text-xs  slide-in -ml-8 mr-4">
              De la meze savuroase la plăceri dulci, fiecare masă la Kvala
              promite să fie o călătorie delicioasă în inima Greciei.
            </div>
          </div>
          <Link href="/rezervare" className="flex pl-4 justify-center w-full">
            <button className="rounded-full slide-right bg-blue-700 bg-opacity-20 border-2 border-blue-700 h-28 w-28 p-4 mb-4 shadow-lg mt-6  hover:scale-110 transition duration-300">
              Rezervare
            </button>
          </Link>
        </div>
      </div>
      {/* right side */}
      <div
        className="hidden md:block md:w-1/2 p-1"
        style={{
          backgroundImage: `url(/hero-photo.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        src="/hero-photo.jpg"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default HomeFirst;
