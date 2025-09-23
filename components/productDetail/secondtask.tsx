"use client";
/* eslint-disable @next/next/no-img-element */

import { useMemo } from "react";
import Link from "next/link";
import { products } from "../mock/products";
import type { Product } from "../mock/types";

const money = (v: number, ccy: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: ccy }).format(v);

function colorFamily(input: string) {
  const s = (input || "").toLowerCase();
  if (!s) return "neutral";
  if (/#/.test(s)) return hexFamily(s);
  if (s.includes("white") || s.includes("ivory")) return "white";
  if (s.includes("black") || s.includes("charcoal") || s.includes("grey") || s.includes("gray"))
    return "neutral";
  if (s.includes("navy") || s.includes("blue")) return "blue";
  if (s.includes("green") || s.includes("olive")) return "green";
  if (s.includes("brown") || s.includes("beige") || s.includes("camel") || s.includes("rust"))
    return "brown";
  if (s.includes("red") || s.includes("burgundy")) return "red";
  return "neutral";
}
function hexFamily(hex: string) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16),
    g = parseInt(c.slice(2, 4), 16),
    b = parseInt(c.slice(4, 6), 16);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  if (max - min < 16) return "neutral";
  if (max === r) return "red";
  if (max === g) return "green";
  return "blue";
}


function suggestSameColor(
  current: Product,
  currentColor: string,
  all: Product[],
  limit = 6
): Product[] {
  const fam = colorFamily(currentColor);
  const others = all.filter((p) => p.id !== current.id);

  const withScore = others.map((p) => {
    const v = p.variants[0];
    const pfam = colorFamily(v?.colorCode || v?.color || "");
    const sameFamily = pfam === fam ? 1 : 0;
    const crossCategory = p.categoryId !== current.categoryId ? 1 : 0;
    return { p, score: sameFamily * 2 + crossCategory }; 
  });

  const chosen = withScore
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.p)
    .slice(0, limit);

  if (chosen.length < limit) {
    for (const p of others) {
      if (!chosen.includes(p)) chosen.push(p);
      if (chosen.length >= limit) break;
    }
  }
  return chosen.slice(0, limit);
}

export default function SecondTask({ slug }: { slug?: string }) {
  const product: Product = useMemo(() => {
    const p = slug ? products.find((x) => x.slug === slug) : products[0];
    return p ?? products[0];
  }, [slug]);

  const currentVariant = product.variants[0]; 
  const currentColor = currentVariant?.colorCode || currentVariant?.color || "";
  const suggestions = useMemo(
    () => suggestSameColor(product, currentColor, products, 6),
    [product, currentColor]
  );

  return (
    <section className="mx-auto mt-16 max-w-[1200px] px-4">
      <h2 className="mb-6 text-2xl tracking-wide">STYLE WITH</h2>

      <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[minmax(260px,560px)_1fr]">
        <div className="sticky top-24 self-start">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100">
            <img
              src={currentVariant?.images?.[0] ?? "/images/placeholder.jpg"}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

<div className="max-h-[90vh] overflow-auto pr-2">
  <div className="divide-y divide-neutral-200">
    {suggestions.map((p) => {
      const v = p.variants[0];
      const href = `/product-detail?slug=${p.slug}`;
      return (
        <div
          key={p.id}
          className="grid grid-cols-[100px_1fr_auto] items-center gap-4 py-6 md:gap-6"
        >
          <Link href={href} className="block">
            <div className="aspect-[3/4] w-[90px] overflow-hidden rounded-xl bg-neutral-100">
              <img
                src={v?.images?.[0] ?? "/images/placeholder.jpg"}
                alt={`${p.name} - ${v?.color}`}
                className="h-full w-full object-cover"
              />
            </div>
          </Link>

          <div className="min-w-0">
            <Link href={href} className="block">
              <p className="truncate text-[15px] font-semibold">{p.name}</p>
              <p className="mt-0.5 text-[12px] uppercase tracking-wide text-neutral-500">
                {p.material}
              </p>
              <p className="mt-1 text-[12px] text-neutral-500">{v?.color}</p>
              <p className="mt-2 text-sm font-medium">
                {money(v?.price ?? p.price, p.currency)}
              </p>
            </Link>
          </div>

          <button className="ml-auto hidden whitespace-nowrap rounded-md border px-4 py-2 text-[12px] font-medium hover:bg-neutral-50 md:inline-flex">
            ADD TO CART
          </button>
        </div>
      );
    })}
  </div>
</div>
      </div>

    </section>
  );
}
