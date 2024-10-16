const MeniuProduct = (props) => {
  return (
    <div className="flex justify-start bg-white  items-center gap-12">
      <div className="p-1 w-32 h-32 bg-gray-300 rounded-md"></div>
      <div>
        <h3 className="capitalize text-black">{props.name}</h3>
        <p className="mt-4 text-black">{props.text}</p>
      </div>
    </div>
  );
};

export default MeniuProduct;
