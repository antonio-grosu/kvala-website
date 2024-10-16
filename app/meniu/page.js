import Link from "next/link";
import MeniuType from "../components/MeniuPage/MeniuType";
const Menu = () => {
  return (
    <main className="py-12">
      <div className="py-20 bg-gray-300 flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-black">Meniu</h1>
      </div>
      <div className="flex mt-8 md:mt-12   border-b-2 border-slate-300 flex-col md:flex-row items-center justify-center gap-8  w-8/12 pb-4 mx-auto">
        {/* desktop view */}
        <Link href="#1" className="md:block hidden">
          Meniu 1
        </Link>
        <Link href="#2" className="md:block hidden">
          Meniu 2
        </Link>
        <Link href="#3" className="md:block hidden">
          Meniu 3
        </Link>
        <Link href="#4" className="md:block hidden">
          Meniu 4
        </Link>
        <Link href="#5" className="md:block hidden">
          Meniu 5
        </Link>
        <Link href="#6" className="md:block hidden">
          Meniu 6
        </Link>
        <Link href="#7" className="md:block hidden">
          Meniu 7
        </Link>
        <Link href="#8" className="md:block hidden">
          Meniu 8
        </Link>
        {/* mobile view */}
        <div className="md:hidden flex items-center justify-start gap-4">
          <Link href="#1">Meniu 1</Link>
          <Link href="#2">Meniu 2</Link>
          <Link href="#3">Meniu 3</Link>
          <Link href="#4">Meniu 4</Link>
        </div>
        <div className=" md:hidden flex items-center justify-start gap-4">
          <Link href="#5">Meniu 5</Link>
          <Link href="#6">Meniu 6</Link>
          <Link href="#7">Meniu 7</Link>
          <Link href="#8">Meniu 8</Link>
        </div>
      </div>
      <Link
        href="/"
        className="inline-flex w-full mx-auto justify-center text-green-500 underline underline-offset-3 mt-4"
      >
        Descarca .pdf
      </Link>

      <div
        id="1"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Tipul 1"
          products={[
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
          ]}
        />
      </div>
      <div
        id="2"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Tipul 2"
          products={[
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
          ]}
        />
      </div>
      <div
        id="3"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Tipul 3"
          products={[
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
          ]}
        />
      </div>

      <div
        id="4"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Tipul 4"
          products={[
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
          ]}
        />
      </div>

      <div
        id="5"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Tipul 5"
          products={[
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
          ]}
        />
      </div>

      <div
        id="6"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Tipul 6"
          products={[
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
          ]}
        />
      </div>

      <div
        id="7"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Tipul 7"
          products={[
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
          ]}
        />
      </div>

      <div
        id="8"
        className="mt-24 py-16 md:py-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96"
      >
        <MeniuType
          type="Tipul 8"
          products={[
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
            { name: "produs 1", text: "text" },
          ]}
        />
      </div>
    </main>
  );
};

export default Menu;
