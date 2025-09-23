import Filter from "./filter";
import Information from "./information";
import ListProduct from "./listProduct";

const Collection = () => {
  return (
    <div className="flex flex-col gap-4">
      <Information />
      <div className="flex flex-col gap-4 p-4">
        <Filter />
        <ListProduct />
      </div>
    </div>
  );
};

export default Collection;
