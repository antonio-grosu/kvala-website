"use client";

const HomeThird = () => {
  return (
    <div className="flex flex-row justify-center items-center py-28 px-40">
      {/* left side */}
      <div className="flex flex-col w-1/2">
        <div className="text-4xl p-4">
          <p>Lorem Ipsum dolor met</p>
        </div>
        <hr className="bg-gray-300"></hr>
        <div className="p-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Donec eget ligula quis tortor imperdiet convallis.</p>
        </div>
        <button className="flex self-end underline p-2 hover:text-green-500 transition duration-300">
          Vezi toate
        </button>
      </div>

      {/* right side */}
      <div className="flex justify-center w-1/2">
        <div className="grid justify-self-start w-56 h-56 bg-black rounded-full border-r-8 border-green-500">
        </div>
      </div>
    </div>
  );
};

export default HomeThird;
