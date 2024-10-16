"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);
  return (
    <nav>
      <div className="fixed z-10 top-0 w-full px-8 py-4 shadow-sm bg-stone-50 flex items-center justify-between">
        <Image priority src="/Logo.png" alt="Logo" height={50} width={50} />
        <div className="md:flex text-sm items-center justify-between gap-4 hidden">
          <Link
            href="/"
            className="text-sm hover:text-green-500 transition-all "
          >
            Acasa
          </Link>
          <Link
            href="/meniu"
            className="text-sm hover:text-green-500 transition-all "
          >
            Meniu
          </Link>
          <Link
            href="/galerie"
            className="text-sm hover:text-green-500 transition-all "
          >
            Galerie
          </Link>
          <Link
            href="/rezervare"
            className=" px-4 py-1 bg-green-500/10 border-2 border-green-500 rounded-md hover:bg-green-500 hover:rounded-2xl transition-all"
          >
            Rezervare
          </Link>
        </div>
        <svg
          className="w-6 h-6  md:hidden text-gray-800"
          onClick={() => setMenu(!menu)}
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
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </div>
      {menu && (
        <div className="fixed z-20 h-screen top-0 right-0 w-full flex">
          <div
            className="p-1 w-4/12 bg-black/20"
            onClick={() => setMenu(!menu)}
          ></div>
          <div className="py-4 px-4 w-8/12 bg-stone-50 flex justify-between flex-col gap-8 ">
            <div className="flex flex-col gap-8">
              <Image
                priority
                src="/Logo.png"
                alt="Logo"
                className="mx-auto"
                height={50}
                width={50}
              />
              {/* div navigatie */}
              <div>
                <h3 className="uppercase text-xs text-black/50 tracking-widest">
                  Navigatie
                </h3>
                <Link
                  href="/"
                  className="block mt-4"
                  onClick={() => setMenu(!menu)}
                >
                  Acasa
                </Link>
                <Link
                  href="/meniu"
                  className="block mt-4"
                  onClick={() => setMenu(!menu)}
                >
                  Meniu
                </Link>
                <Link
                  href="/galerie"
                  className="block my-4"
                  onClick={() => setMenu(!menu)}
                >
                  Galerie
                </Link>
                <Link
                  onClick={() => setMenu(!menu)}
                  href="/rezervare"
                  className="px-4 py-1 flex justify-center bg-green-500/10 border-2 border-green-500 rounded-md hover:bg-green-500 hover:rounded-2xl transition-all"
                >
                  Rezervare
                </Link>
              </div>
              {/* div retele sociale */}
              <div>
                <h3 className="uppercase text-xs text-black/50 tracking-widest">
                  Sociale
                </h3>
                <Link
                  href="/"
                  className="block mt-4"
                  onClick={() => setMenu(!menu)}
                >
                  Instagram
                </Link>
                <Link
                  href="/meniu"
                  className="block mt-4"
                  onClick={() => setMenu(!menu)}
                >
                  Facebook
                </Link>
              </div>
              {/* div contactare */}
              <div>
                <h3 className="uppercase text-xs text-black/50 tracking-widest">
                  Contactare
                </h3>
                <Link
                  href="/"
                  className="block mt-4"
                  onClick={() => setMenu(!menu)}
                >
                  Telefon
                </Link>
                <Link
                  href="/meniu"
                  className="block mt-4"
                  onClick={() => setMenu(!menu)}
                >
                  Email
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Link
                href="https://blooming-solutions.ro"
                className="mt-8 w-full flex items-center justify-start gap-2"
              >
                <Image
                  priority
                  src="/Blooming_Solutions_Logo.png"
                  width={40}
                  height={40}
                ></Image>
                <p className="font-semibold text-sm">
                  Powered by Blooming Solutions
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
