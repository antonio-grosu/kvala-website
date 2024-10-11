import Link from "next/link";

const RezervareFirst = () => {
  return (
    <div className="pt-36 md:pt-12 min-h-screen py-20 w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 flex items-center justify-between">
      {/* div poza desktop */}
      <div className="w-96 h-96 bg-gray-300 rounded-md p-1"></div>
      <div className="w-5/12">
        <h1 className="text-2xl md:text-4xl font-semibold text-black">
          Lorem Ipsum
        </h1>
        <p className=" text-black mt-4 mb-8">Lorem Ipsum dolor met</p>
        <Link
          href=""
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:rounded-2xl transition-all"
        >
          Rezerva o masa
        </Link>
        <div className="w-7/12 border-t-2 border-black/20 mt-12 pt-4">
          <p className=" text-black/50 mt-4 mb-8">Adresa Restaurantului</p>
        </div>
      </div>
    </div>
  );
};

export default RezervareFirst;