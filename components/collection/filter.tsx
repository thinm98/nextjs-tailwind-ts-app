import { Button } from "@radix-ui/themes";

const Filter = () => {
  return (
    <div className="flex justify-between items-center px-6">
      <div>38 Products</div>
      <div className="flex gap-2">
        <Button color="gray" variant="outline">
          Sort by Price
        </Button>
        <Button color="green" variant="outline">
          Sort by Name
        </Button>
      </div>
    </div>
  );
};

export default Filter;
