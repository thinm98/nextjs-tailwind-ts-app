import Product from "../common/product";

const products = [
  {
    name: "Portofino Shirt",
    material: "LINEN",
    color: "Sky Blue",
    totalColors: 26,
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
  {
    name: "Siena Shirt",
    material: "COTTON PIQUÉ",
    color: "Sage Green",
    totalColors: 13,
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
  {
    name: "Classic Shirt",
    material: "DENIM",
    color: "Light Blue",
    totalColors: 6,
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
  {
    name: "Casual Polo",
    material: "COTTON",
    color: "White",
    totalColors: 8,
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
  {
    name: "Summer Tee",
    material: "LINEN BLEND",
    color: "Navy",
    totalColors: 12,
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
  {
    name: "Oxford Shirt",
    material: "COTTON OXFORD",
    color: "Striped",
    totalColors: 5,
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
  {
    name: "Weekend Henley",
    material: "JERSEY",
    color: "Gray",
    totalColors: 7,
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
  {
    name: "Dress Shirt",
    material: "POPLIN",
    color: "Black",
    totalColors: 4,
    image:
      "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/k/m/kmyb_imax_2000x3000-min.jpg",
  },
];

const ListProduct = () => {
  return (
    <div className="list-product">
      <div className="container mx-auto max-w-7xl">
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
