"use client";
import Link from "next/link";
const HomeThird = () => {
    return (
        <div className="flex flex-col gap-8 md:flex-row md:justify-center md:items-center md:py-28 md:px-40 py-12 px-8">
            {/* left side */}
            <div className="flex flex-col md:w-1/2 w-full">
                <div className="text-2xl pb-8 font-semibold  text-center md:text-left md:text-5xl md:p-4">
                    <h1>Lorem Ipsum dolor met</h1>
                </div>
                <div className="md:hidden flex justify-center mb-8 md:w-1/2">
                    <div className="grid justify-self-start w-44 h-44 bg-black rounded-full border-r-8 border-green-500" style={{ backgroundImage: "url(/second-circle.png)", backgroundSize: "cover" }}></div>
                </div>
                <hr className="bg-gray-300"></hr>
                <div className="p-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
                        malesuada. Nulla facilisi. Donec eget ligula quis tortor imperdiet
                        convallis.
                    </p>
                </div>
                <Link href="/meniu" className="flex items-end justify-end">
                    <button className="flex self-end underline p-2 hover:text-green-500 transition duration-300">
                        Vezi toate
                    </button>
                </Link>
            </div>

            {/* right side */}
            <div className="hidden md:flex justify-center w-1/2">
                <div className="grid justify-self-start w-56 h-56 bg-black rounded-full border-r-8 border-green-500" style={{ backgroundImage: "url(/second-circle.png)", backgroundSize: "cover" }}></div>
            </div>
        </div>
    );
};

export default HomeThird;
