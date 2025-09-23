interface ProductProps {
  name: string;
  material: string;
  color: string;
  totalColors: number;
  image: string;
}

const Product = ({
  name,
  material,
  color,
  totalColors,
  image,
}: ProductProps) => {
  return (
    <div className="product-item">
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ aspectRatio: "4/5" }}
        />
      </div>
      <div className="product-info mt-4">
        <h3 className="text-[15px] font-medium mb-1">{name}</h3>
        <p className="text-[13px] text-gray-600 uppercase mb-2">{material}</p>
        <div className="flex justify-between items-center text-[13px]">
          <span className="text-gray-900">{color}</span>
          <span className="text-gray-500">{totalColors} colours</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
