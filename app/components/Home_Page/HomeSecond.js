"use client";

const HomeSecond = () => {
  return (
    <div className="flex flex-col items-center bg-emerald-50 py-12">

      {/* Titlu */}
      <h1 className="text-5xl font-bold p-8">Lorem Ipsum</h1>

      {/* Infos */}
      <div className="flex flex-row gap-40">
        <div className="p-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula sed mi nec placerat. Maecenas condimentum diam urna, eu dictum ligula pharetra in. Quisque id ipsum a nulla lobortis posuere non ut ante. Proin condimentum lorem id facilisis sodales. Curabitur nec dignissim turpis. Curabitur eget arcu et velit fermentum rhoncus.
        </div>
        <div className="p-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula sed mi nec placerat. Maecenas condimentum diam urna, eu dictum ligula pharetra in. Quisque id ipsum a nulla lobortis posuere non ut ante. Proin condimentum lorem id facilisis sodales. Curabitur nec dignissim turpis. Curabitur eget arcu et velit fermentum rhoncus.
        </div>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-row w-full items-center">
        {/* Linia care unește divurile */}
        <div className="absolute w-11/12 h-1 bg-gray-300 top-1/2 left-14 transform -translate-y-1/2 z-0"></div>
        
        <div className="flex flex-col w-1/2 px-20 bg-red-30 relative">
          <div className="flex justify-center text-white items-center h-20 w-20 bg-black rounded-full z-10 mt-10">
            2011
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
