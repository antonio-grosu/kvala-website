import MeniuProduct from "./MeniuProduct";

const MeniuType = (props) => {
  const products = props.products;
  return (
    <div>
      <h1 className="text-black text-4xl slide-in  underline underline-offset-2 font-semibold">
        {props.type}
      </h1>
      <div className="mt-8 flex flex-col gap-12">
        <div className="grid md:grid-cols-2  4xl:grid-cols-3 justify-end grid-cols-1 gap-8">
          {products.map((elem) => (
            <MeniuProduct key={elem.id} name={elem.name} text={elem.text} image={elem.image}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeniuType;
