import Link from "next/link";
import Image from "next/image";
const RezervareFirst = () => {
  return (
    <div className="pt-36 md:pt-12 min-h-screen py-20 gap-12 w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 flex items-center justify-between">
      {/* div poza desktop */}
      <Image
        alt="Locatie"
        src="/locatie.jpeg"
        priority
        width={500}
        height={500}
        className="md:block w-1/2 hidden slide-left rounded-md p-1"
      />
      <div className="md:w-5/12 w-full">
        <h1 className="text-2xl md:text-4xl slide-in font-semibold text-black">
          Rezervă-ți masa la Kvala
        </h1>
        <Image
          alt="Locatie"
          src="/locatie.jpeg"
          priority
          width={500}
          height={500}
          className="block md:hidden slide-in rounded-md p-1"
        />

        <p className=" text-black slide-in mt-4 mb-8">
          {" "}
          Te așteptăm cu brațele deschise la Kvala! Asigură-ți locul în
          restaurantul nostru confortabil și plin de atmosferă, rezervând o masă
          în avans. Indiferent dacă sărbătorești o ocazie specială sau pur și
          simplu vrei să te bucuri de o cină relaxantă cu prietenii, echipa
          noastră este aici pentru a te ajuta. Completează formularul de
          rezervare și vino să te răsfeți cu preparatele noastre delicioase!
        </p>
        <Link
          href=""
          className="px-4 py-2 flex md:inline-block justify-center slide-right bg-blue-700 text-white rounded-md hover:rounded-2xl transition-all"
        >
          Rezervă o masă
        </Link>
        <div className="md:w-7/12 border-t-2 border-black/20 mt-12 pt-4">
          <p className=" text-black/50  slide-in mb-8">
            {" "}
            Strada Doctor Louis Pasteur 63, București 050534
          </p>
        </div>
      </div>
    </div>
  );
};

export default RezervareFirst;
