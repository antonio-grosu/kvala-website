"use client";

const HomeSecond = () => {
  return (
    <div className="flex flex-col px-8 items-center bg-blue-100 py-12">
      {/* Titlu */}
      <h1 className="text-2xl md:text-5xl font-semibold p-8 md:text-center text-left">
        Grecia, tradiție, ospitalitate, prospețime...
      </h1>

      {/* Infos */}
      <div className="flex  md:flex-row md:justify-between flex-col justify-start gap-8">
        <div className="md:p-12 px-8 md:w-1/2">
          Am ales drumul mai greu, fără compromisuri inutile, cu pasiune și cu
          suflet, în încercarea noastră de a pune în farfurie o fărâmă din ceea
          ce reprezintă Grecia pentru noi toți... puțină filosofie, câteva
          măsline, un strop de ulei virgin, un praf de oregano, sare din mare și
          căldură cât încape.
        </div>
        {/* Timeline mobile*/}
        <div className=" md:hidden z-0  flex flex-row w-full items-center">
          {/* Linia care unește divurile */}
          <div className="absolute left-0 w-full h-1 bg-gray-300 z-0"></div>

          <div className="flex top-0 left-0 flex-col items-center bg-red-30 relative">
            <div className="flex justify-center  text-white items-center h-16 w-16 bg-black rounded-full z-10 mt-10">
              2016
            </div>
            <p className="flex justify-center text-center mt-4">Start</p>
          </div>

          <div className="flex top-0 flex-row justify-between w-full gap-12 px-20 relative">
            <div className="flex justify-center  text-white items-center h-16 w-16 bg-black rounded-full z-10 ">
              2020
            </div>
            <div className="flex justify-center  text-white items-center h-16 w-16 bg-black rounded-full z-10">
              Prezent
            </div>
          </div>
        </div>
        <div className="md:p-12 px-8 md:w-1/2">
          Sperăm ca efortul nostru să aducă un dram de satisfacție și o cât de
          mică senzație că vă aflați pe plaiuri elene. <br />
          <p className="font-bold mt-4">
            Cu drag, <br />
            Chef Florian Stroe
          </p>
        </div>
      </div>

      {/* Timeline desktop*/}
      <div className="relative z-0 hidden md:flex flex-row w-full items-center">
        {/* Linia care unește divurile */}
        <div className="absolute w-11/12 h-1 bg-gray-300 top-1/2 left-14 transform -translate-y-1/2 z-0"></div>

        <div className="flex flex-col w-1/2 px-20 bg-red-30 relative">
          <div className="flex justify-center text-white items-center h-20 w-20 bg-black rounded-full z-10 mt-10">
            2016
          </div>
          <p className="flex justify-center w-20 mt-4">Start</p>
        </div>

        <div className="flex flex-row justify-between w-1/2 px-20 relative">
          <div className="flex justify-center text-white items-center h-20 w-20 bg-black rounded-full z-10">
            2020
          </div>
          <div className="flex justify-center text-white items-center h-20 w-20 bg-black rounded-full z-10">
            Prezent
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecond;
