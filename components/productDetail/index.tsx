// components/productDetail/index.tsx
import FirstTask from "./firsttask";
import ThirdTask from "./thirdtask";
import SecondTask from "./secondtask";
import { products } from "../mock/products";

export default function ProductDetail({ slug }: { slug?: string }) {
  const product =
    (slug ? products.find((p) => p.slug === slug) : products[0]) ?? products[0];

  return (
    <>
      <FirstTask slug={slug} />
      <SecondTask slug={slug} />
      <ThirdTask currentProductId={product.id} />
    </>
  );
}
