"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useMemo, useRef } from "react";
import { products } from "../mock/products";
import type { Product } from "../mock/types";

const money = (v: number, ccy: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: ccy }).format(v);

export default function ThirdTask({
  currentProductId,
  youMayLikeIds,
}: {
  currentProductId?: string;
  youMayLikeIds?: string[];
}) {
  const youMayLike: Product[] = useMemo(() => {
    if (youMayLikeIds?.length) {
      const map = new Map(products.map((p) => [p.id, p]));
      return youMayLikeIds.map((id) => map.get(id)).filter(Boolean) as Product[];
    }
    return products
      .filter((p) => p.categoryId === "c1" && p.id !== currentProductId)
      .slice(0, 12);
  }, [currentProductId, youMayLikeIds]);

  return (
    <section className="mx-auto mt-16 max-w-[1200px] px-4">
      <h2 className="mb-6">
        <span className="text-2xl tracking-wide underline underline-offset-[10px]">
          YOU MAY LIKE
        </span>
      </h2>
      <Carousel items={youMayLike} />
    </section>
  );
}

function Carousel({ items }: { items: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  if (!items.length) return <p className="py-8 text-sm text-neutral-500">No items</p>;

  return (
 
    <div className="relative pointer-events-none">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-2 md:px-6"
      >
        {items.map((p) => (
          <div key={p.id} className="snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollBy(-1)}
        aria-label="Prev"
        className="pointer-events-auto absolute hidden -left-10 top-1/2 -translate-y-1/2 rounded-full border bg-white/90 p-2 shadow-sm backdrop-blur hover:bg-white md:inline-flex"
      >
        ‹
      </button>
      <button
        onClick={() => scrollBy(1)}
        aria-label="Next"
        className="pointer-events-auto absolute hidden -right-10 top-1/2 -translate-y-1/2 rounded-full border bg-white/90 p-2 shadow-sm backdrop-blur hover:bg-white md:inline-flex"
      >
        ›
      </button>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const v = product.variants[0];
  const href = `/product-detail?slug=${product.slug}`;

  return (
    <Link href={href} className="block w-[280px] shrink-0">
      <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100">
        <img
          src={v.images[0] ?? "/images/placeholder.jpg"}
          alt={`${product.name} - ${v.color}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-3">
        <p className="text-sm font-semibold leading-5">{product.name}</p>
        <p className="text-[12px] text-neutral-500">{product.material}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-medium">
            {money(v.price ?? product.price, product.currency)}
          </span>
          <span className="text-[12px] text-neutral-500">
            {product.variants.length} colours
          </span>
        </div>
      </div>
    </Link>
  );
}
