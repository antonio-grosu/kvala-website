"use client";

const HomeFirst = () => {
  return (
  <div className="flex flex-row">
    {/* left side */}
    <div className="flex flex-col bg-white text-black w-1/2 pl-8 pr-20 pt-36 gap-10 pb-8">
      <h1 className="text-5xl font-bold">Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada mollis justo, ut vulputate tellus sollicitudin vel.
      </p>
      <div className="grid grid-cols-3 justify-items-center w-full">
        <div className="flex justify-center border-r-2 border-b-2 border-slate-300 w-full col-span-2">
          <button className="rounded-full bg-green-500 h-28 w-28 p-4 mb-6 hover:scale-110 transition duration-300">
            Exploreaza
            <br></br>
            Meniul
          </button>
        </div>
        <div className="flex flex-col justify-center items-center bg-blue-30 border-b-2 border-slate-300 w-full">
          <p>782</p>
          <p>review-uri pozitive</p>
        </div>
        <div className="grid grid-cols-2 items-center justify-end gap-2 bg-cyan-30 w-full border-r-2 border-slate-300 col-span-2">
          <div className="grid justify-self-start w-32 h-32 bg-black rounded-full border-l-8 border-green-500 mt-6 ml-4">
          </div>
          <div className="text-xs -ml-8 mr-4">
            Lorem ipsum dolor sit amet, consect etur adipiscing elit.
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button className="rounded-full bg-green-500 bg-opacity-20 border-2 border-green-500 h-28 w-28 p-4 mb-4 shadow-lg mt-6  hover:scale-110 transition duration-300">
            Locatie
          </button>
        </div>
      </div>
    </div>
    {/* right side */}
    <div className="bg-slate-300 w-1/2">
    </div>
  </div>
  );
};

export default HomeFirst;
