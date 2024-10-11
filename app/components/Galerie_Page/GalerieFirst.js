const GalerieFirst = () => {
  return (
    <div className="pt-12">
      <div className="w-full h-44 bg-gray-300 flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-black">Galerie</h1>
      </div>
      <div className="py-20 w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 flex flex-col gap-8">
        {/* randul 1 desktop */}
        <div className="hidden md:flex justify-between">
          <div className="w-7/12 h-32 p-1 bg-gray-300 rounded-md"></div>
          <div className="w-32 h-32 p-1 bg-gray-300 rounded-md"></div>
          <div className="w-32 h-32 p-1 bg-gray-300 rounded-md"></div>
        </div>
        {/* randul 2 desktop */}
        <div className="hidden md:flex justify-between gap-8">
          <div className="w-full h-44 p-1 bg-gray-300 rounded-md"></div>
        </div>
        {/* randul 3 desktop */}

        <div className="hidden md:flex justify-between">
          <div className="w-32 h-32 p-1 bg-gray-300 rounded-md"></div>
          <div className="w-32 h-32 p-1 bg-gray-300 rounded-md"></div>
          <div className="w-32 h-32 p-1 bg-gray-300 rounded-md"></div>
          <div className="w-32 h-32 p-1 bg-gray-300 rounded-md"></div>
          <div className="w-32 h-32 p-1 bg-gray-300 rounded-md"></div>
        </div>
        {/* randul 4 desktop */}
        <div className="hidden md:flex justify-between gap-8">
          <div className="w-6/12 h-32 p-1 bg-gray-300 rounded-md"></div>
          <div className="w-6/12 h-32 p-1 bg-gray-300 rounded-md"></div>
        </div>
        {/* randurile mobile */}
        <div className="md:hidden flex flex-col  gap-4">
          <div className="w-full h-32 p-1 bg-gray-300 rounded-md"></div>
          <div className="flex justify-between gap-4">
            <div className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"></div>
            <div className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"></div>
          </div>
          <div className="w-full h-32 p-1 bg-gray-300 rounded-md"></div>
          <div className="flex justify-between gap-4">
            <div className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"></div>
            <div className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"></div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"></div>
            <div className="w-1/2 h-32 p-1 bg-gray-300 rounded-md"></div>
          </div>
          <div className="w-full h-32 p-1 bg-gray-300 rounded-md"></div>
          <div className="w-full h-32 p-1 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default GalerieFirst;
