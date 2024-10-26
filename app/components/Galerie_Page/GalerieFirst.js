import Link from "next/link";

const GalerieFirst = () => {
  return (
    <div className="pt-12">
      <div
        className="w-full h-44 bg-gray-300 flex items-center justify-center
      "
        style={{
          backgroundImage: `url(/bg-all.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <h1 className="text-2xl font-semibold text-white">Galerie</h1>
      </div>
      <div className="py-20 w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 flex flex-col gap-8">
        {/* randul 1 desktop */}
        <div className="hidden md:flex justify-between items-center">
          <Link
            href="/galerie/1"
            className="w-7/12 h-56 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>{" "}
          <Link
            href="/galerie/2"
            className="w-56 h-56 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <Link
            href="/galerie/3"
            className="w-56 h-56 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
        </div>
        {/* randul 2 desktop */}
        <div className="hidden md:flex justify-between gap-8">
          <Link
            href="/galerie/4"
            className="w-full h-56 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/4.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <Link
            href="/galerie/5"
            className="w-full h-56 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/5.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
        </div>
        {/* randul 3 desktop */}

        <div className="hidden md:flex justify-between">
          <Link
            href="/galerie/6"
            className="w-44 h-44 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/6.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <Link
            href="/galerie/7"
            className="w-44 h-44 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/7.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <Link
            href="/galerie/8"
            className="w-44 h-44 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/8.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <Link
            href="/galerie/9"
            className="w-44 h-44 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/9.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <Link
            href="/galerie/10"
            className="w-44 h-44 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/10.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
        </div>
        {/* randul 4 desktop */}
        <div className="hidden md:flex justify-between gap-8">
          <Link
            href="/galerie/11"
            className="w-6/12 h-44 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/11.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <Link
            href="/galerie/12"
            className="w-6/12 h-44 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/12.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
        </div>
        {/* randurile mobile */}
        <div className="md:hidden flex flex-col  gap-4">
          <Link
            href="/galerie/1"
            className="w-full h-32 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <div className="flex justify-between gap-4">
            <Link
              href="/galerie/2"
              className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"
              style={{
                backgroundImage: "url(/2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Link>
            <Link
              href="/galerie/3"
              className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"
              style={{
                backgroundImage: "url(/3.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Link>
          </div>
          <Link
            href="/galerie/4"
            className="w-full h-32 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/4.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <div className="flex justify-between gap-4">
            <Link
              href="/galerie/5"
              className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"
              style={{
                backgroundImage: "url(/5.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Link>
            <Link
              href="/galerie/6"
              className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"
              style={{
                backgroundImage: "url(/6.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Link>
          </div>
          <div className="flex justify-between gap-4">
            <Link
              href="/galerie/7"
              className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"
              style={{
                backgroundImage: "url(/7.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Link>
            <Link
              href="/galerie/8"
              className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"
              style={{
                backgroundImage: "url(/8.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Link>
          </div>
          <Link
            href="/galerie/9"
            className="w-full h-32 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/9.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <Link
            href="/galerie/10"
            className="w-full h-32 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/10.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <Link
            href="/galerie/11"
            className="w-full h-32 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/11.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
          <Link
            href="/galerie/12"
            className="w-full h-32 p-1 bg-gray-300 rounded-md"
            style={{
              backgroundImage: "url(/12.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default GalerieFirst;
