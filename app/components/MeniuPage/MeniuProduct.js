const MeniuProduct = (props) => {
  return (
    <div className="flex slide-in justify-between md:justify-start bg-white  items-center gap-12">
      {props.image && (
        <div
          className="p-1 w-32 h-32 rounded-md"
          style={{
            backgroundImage: `url(/${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></div>
      )}
      <div className="w-7/12">
        <h3 className="capitalize text-black text-lg font-semibold">
          {props.name}
        </h3>
        <p className="mt-4 text-black/80 text-xs ">{props.text}</p>
      </div>
    </div>
  );
};

export default MeniuProduct;
