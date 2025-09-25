"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { products } from "../mock/products";
import type { Product } from "../mock/types";



import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

type Props = { slug?: string };

const money = (v: number, ccy: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: ccy }).format(v);

const Divider = () => <hr className="my-6 border-0 border-t border-neutral-200" />;

export default function ProductDetail({ slug }: Props) {
  const product: Product = useMemo(() => {
    const p = slug ? products.find((x) => x.slug === slug) : products[0];
    return p ?? products[0];
  }, [slug]);

  const [variantId, setVariantId] = useState<string>(product.variants[0].id);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVariantId(product.variants[0].id);
    setImgIndex(0);
  }, [product]);

  useEffect(() => {
    if (mainSwiper && mainSwiper.activeIndex !== imgIndex) {
      mainSwiper.slideTo(imgIndex);
    }
  }, [imgIndex, mainSwiper]);

  const variant = useMemo(
    () => product.variants.find((v) => v.id === variantId)!,
    [product, variantId]
  );

  return (
    <main className="mx-auto max-w-[1250px] px-4 py-10 lg:py-12">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(520px,48vw)_1fr] xl:grid-cols-[600px_minmax(0,1fr)] lg:gap-14">        <div className="grid grid-cols-1 md:grid-cols-[80px_minmax(0,1fr)] gap-5 min-h-0">
          <div className="sticky top-16 ml-3 hidden md:flex max-h-[calc(100vh-140px)] flex-col gap-2 overflow-y-auto pr-1">
            {variant.images.map((src, i) => (
              <button
                key={src + i}
                onClick={() => {
                  setImgIndex(i);
                  mainSwiper?.slideTo(i);
                }}
                aria-label={`Thumb ${i + 1}`}
                className={`flex aspect-[3/4] h-[110px] w-[64px] items-center justify-center rounded-lg bg-neutral-80 p-0.5 ${
                  i === imgIndex
                    ? "border-2 border-black"
                    : "border border-transparent hover:border-neutral-300"
                }`}
              >
                <img
                  src={src || "/images/placeholder.jpg"}
                  alt=""
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/placeholder.jpg";
                  }}
                  className="h-full w-full rounded-sm object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>

<div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 max-h-[85vh]">
            <Swiper
              key={variantId}
              onSwiper={setMainSwiper}
              onSlideChange={(s) => setImgIndex(s.activeIndex)}
              slidesPerView={1}
              speed={350}
              observer
              observeParents
              className="h-full"
              modules={[Navigation, Pagination]}
              initialSlide={imgIndex}
              onBeforeInit={(swiper) => {
                const el = paginationRef.current;
                if (!el) return;
                const p = swiper.params.pagination;
                if (p && typeof p !== "boolean") {
                  p.el = el;
                  p.clickable = true;
                }
              }}
              pagination={{
                clickable: true,
                renderBullet: (_idx, className) =>
                  `<span class="${className} lf-bullet"></span>`,
              }}
            >
              {variant.images.map((src, i) => (
                <SwiperSlide key={src + i} className="h-full">
                  <div className="h-full w-full">
                    <img
                      src={src || "/images/placeholder.jpg"}
                      alt=""
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/images/placeholder.jpg";
                      }}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="md:hidden">
            <div ref={paginationRef} className="mt-3 flex items-center justify-center gap-3" />
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-start justify-between gap-6">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">{product.name}</h1>
              <p className="mt-1 text-sm text-neutral-500">{product.material}</p>
            </div>
            <div className="whitespace-nowrap text-lg font-medium">
              {money(variant.price ?? product.price, product.currency)}
            </div>
          </div>

          <p className="text-[12px] font-medium uppercase tracking-wider text-neutral-600">
            Colour: <span className="normal-case font-semibold">{variant.color}</span>
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.variants.map((v) => {
              const active = v.id === variantId;
              return (
                <button
                  key={v.id}
                  onClick={() => {
                    setVariantId(v.id);
                    setImgIndex(0);
                  }}
                  title={v.color}
                  className={`h-20 w-15 overflow-hidden rounded-md p-0.5 ${active ? "ring-2 ring-black" : ""}`}
                >
                  <img
                    src={v.images[0] ?? "/images/placeholder.jpg"}
                    alt={v.color}
                    className="h-full w-full rounded-[10px] object-cover"
                  />
                </button>
              );
            })}
          </div>

          <div className="mt-6">
            <p className="text-[12px] font-medium uppercase tracking-wider text-neutral-600">Size</p>
            <RadioGroup.Root
              className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6"
              defaultValue={variant.sizes[0]}
              aria-label="Choose size"
            >
              {variant.sizes.map((s) => (
                <RadioGroup.Item
                  key={s}
                  value={s}
                  className="h-10 rounded-md px-3 text-sm shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)] hover:bg-neutral-50 data-[state=checked]:bg-black data-[state=checked]:text-white"
                >
                  {s}
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </div>

          <div className="mt-6 flex items-start gap-3 text-sm text-neutral-700">
            <span className="mt-0.5">🎁</span>
            <p>Add complimentary gift wrap and handwritten note in cart or checkout</p>
          </div>

          <button className="mt-4 h-12 w-full rounded-lg bg-black text-sm font-medium tracking-wide text-white">
            ADD TO CART
          </button>

          <p className="mt-3 text-center text-[12px] uppercase tracking-wider text-neutral-500">
            Made in Italy &nbsp;–&nbsp; Free Returns &amp; Exchanges &nbsp;–&nbsp; Secure Payments
          </p>
          <Divider />

          <Accordion.Root type="multiple" className="divide-y divide-neutral-200">
            <Accordion.Item value="craft">
              <Accordion.Trigger className="flex w-full items-center justify-between py-3 text-left font-medium">
                CRAFT DETAILS <span>▾</span>
              </Accordion.Trigger>
              <Accordion.Content className="pb-4 text-sm text-neutral-800">
                <ul className="space-y-1 list-disc pl-5">
                  {product.craftDetails.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="note">
              <Accordion.Trigger className="flex w-full items-center justify-between py-3 text-left font-medium">
                EDITOR&apos;S NOTE <span>▾</span>
              </Accordion.Trigger>
              <Accordion.Content className="pb-4 text-sm text-neutral-800">
                {product.editorsNote}
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="care">
              <Accordion.Trigger className="flex w-full items-center justify-between py-3 text-left font-medium">
                CARE <span>▾</span>
              </Accordion.Trigger>
              <Accordion.Content className="pb-4 text-sm text-neutral-800">
                <ul className="space-y-1 list-disc pl-5">
                  <li>Hand wash cold</li>
                  <li>Do not tumble dry</li>
                  <li>Dry flat in shade; cool iron if needed</li>
                </ul>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="shipping">
              <Accordion.Trigger className="flex w-full items-center justify-between py-3 text-left font-medium">
                SHIPPING &amp; FREE RETURNS <span>▾</span>
              </Accordion.Trigger>
              <Accordion.Content className="pb-4 text-sm text-neutral-800">
                <ul className="space-y-1 list-disc pl-5">
                  <li>Free express shipping above US$300</li>
                  <li>Free 30-day returns &amp; exchanges</li>
                  <li>Worldwide secure payments</li>
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>

      <style jsx global>{`
        .lf-bullet {
          width: 12px;
          height: 12px;
          border-radius: 2px;
          background: #e0ded8;
          display: inline-block;
        }
        .swiper-pagination-bullet-active.lf-bullet {
          background: #111;
        }
      `}</style>
    </main>
  );
}
