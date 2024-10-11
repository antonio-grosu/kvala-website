import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full bg-stone-50 px-4 md:px-8 py-12 flex md:flex-row flex-col items-top justify-between">
      <div className="flex flex-col md:w-3/12">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="w-3/12"
        />
        <p className="text-sm mt-4 text-black/50">Adresa</p>
        {/* blooming solutions mark */}
        <Link
          href="https://blooming-solutions.ro"
          className="mt-8 w-full flex items-center justify-start gap-2"
        >
          <Image
            priority
            className="w-1/12"
            src="/Blooming_Solutions_Logo.png"
            width={400}
            height={400}
          ></Image>
          <p className="font-semibold text-sm">Powered by Blooming Solutions</p>
        </Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Navigație</h3>
        <Link
          href="/"
          className="text-sm hover:text-yellow-950 transition-all "
        >
          Acasa
        </Link>
        <Link
          href="/galerie"
          className="text-sm hover:text-yellow-950 transition-all "
        >
          Galerie
        </Link>
        <Link
          href="/meniu"
          className="text-sm hover:text-green-500 transition-all "
        >
          Meniu
        </Link>
        <Link
          href="/rezervare"
          className="text-sm hover:text-green-500 transition-all "
        >
          Rezervare
        </Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Rețele Sociale</h3>
        <Link
          href="https://www.facebook.com/p/Wanda-Coffee-and-joy-100083211436695/?_rdr"
          className="text-sm hover:text-green-500 transition-all "
        >
          Facebook
        </Link>
        <Link
          href="https://www.instagram.com/wandacoffeeandjoy?igsh=ejkzaGtobG9xdmZv"
          className="text-sm hover:text-green-500 transition-all "
        >
          Instagram
        </Link>
      </div>

      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold">Pentru colaborări</h3>
        <Link href="" className="text-sm hover:text-green-500 transition-all ">
          contact.kvala@gmail.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
