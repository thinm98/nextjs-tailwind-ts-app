import type { Product } from "./types";

export const products: Product[] = [
  /* =================== SHIRTS =================== */
  {
    id: "p1",
    slug: "como-shirt-silk-cotton",
    name: "Como Shirt",
    material: "SILK-COTTON",
    price: 325,
    currency: "USD",
    categoryId: "c1",
    variants: [
      {
        id: "v1",
        color: "White",
        colorCode: "#ffffff",
        images: ["/images/1.webp", "/images/2.webp"],
        sizes: ["XS","S","M","L","XL","2XL","3XL"],
        price: 325,
      },
      {
        id: "v2",
        color: "Charcoal Grey",
        colorCode: "#3a3a3a",
        images: ["/images/4.webp", "/images/5.webp"],
        sizes: ["XS","S","M","L","XL","2XL","3XL"],
        price: 325,
      },
    ],
    craftDetails: [
      "Italian silk (60%) & cotton (40%)",
      "Mother of pearl buttons",
      "Made in Northern Italy",
    ],
    editorsNote: "Designed for comfort and breathability, perfect for smart casual outfits.",
  },

  {
    id: "p2",
    slug: "classic-shirt-cashmere-cotton",
    name: "Classic Shirt",
    material: "CASHMERE-COTTON",
    price: 345,
    currency: "USD",
    categoryId: "c1",
    variants: [
      {
        id: "v3",
        color: "Black",
        colorCode: "#111111",
        images: ["/images/classic-black-1.jpg","/images/classic-black-2.jpg"],
        sizes: ["S","M","L","XL","2XL"],
        price: 345,
      },
      {
        id: "v4",
        color: "Light Blue",
        colorCode: "#b7c9e2",
        images: ["/images/classic-lightblue-1.jpg","/images/classic-lightblue-2.jpg"],
        sizes: ["S","M","L","XL","2XL"],
        price: 345,
      },
    ],
    craftDetails: [
      "Soft cashmere-cotton twill",
      "Australian mother of pearl buttons",
      "English concealed double-stitched seams",
    ],
    editorsNote: "Refined and versatile, a wardrobe essential.",
  },

  {
    id: "p3",
    slug: "siena-shirt-cotton-pique",
    name: "Siena Shirt",
    material: "COTTON PIQUÉ",
    price: 295,
    currency: "USD",
    categoryId: "c1",
    variants: [
      {
        id: "v5",
        color: "Charcoal Grey",
        colorCode: "#444444",
        images: ["/images/siena-charcoal-1.jpg","/images/siena-charcoal-2.jpg"],
        sizes: ["S","M","L","XL","2XL"],
        price: 295,
      },
      {
        id: "v6",
        color: "Marine Green",
        colorCode: "#6ea18a",
        images: ["/images/siena-marine-1.jpg","/images/siena-marine-2.jpg"],
        sizes: ["S","M","L","XL","2XL"],
        price: 295,
      },
    ],
    craftDetails: [
      "Breathable cotton piqué",
      "Lightweight, perfect for spring-summer",
      "Made in Northern Italy",
    ],
    editorsNote: "Casual texture with a tailored silhouette.",
  },

  {
    id: "p4",
    slug: "polo-silk-cotton",
    name: "Polo",
    material: "SILK-COTTON",
    price: 210,
    currency: "USD",
    categoryId: "c1",
    variants: [
      {
        id: "v7",
        color: "Navy Blue",
        colorCode: "#1e3a8a",
        images: ["/images/polo-navy-1.jpg","/images/polo-navy-2.jpg"],
        sizes: ["S","M","L","XL"],
        price: 210,
      },
      {
        id: "v8",
        color: "Charcoal Grey",
        colorCode: "#3b3b3b",
        images: ["/images/polo-charcoal-1.jpg","/images/polo-charcoal-2.jpg"],
        sizes: ["S","M","L","XL"],
        price: 210,
      },
    ],
    craftDetails: [
      "Silk (60%) & cotton (40%)",
      "Soft gauge 28 fabric",
    ],
    editorsNote: "Elevated polo ideal for warm days and layering.",
  },

  /* =================== KNITWEAR =================== */
  {
    id: "p5",
    slug: "dolomiti-zip-sweater",
    name: "Dolomiti Zip Sweater",
    material: "SILK-CASHMERE",
    price: 495,
    currency: "USD",
    categoryId: "c2",
    variants: [
      {
        id: "v9",
        color: "Navy Blue",
        colorCode: "#1f3470",
        images: ["/images/dolomiti-navy-1.jpg","/images/dolomiti-navy-2.jpg"],
        sizes: ["S","M","L","XL"],
        price: 495,
      },
      {
        id: "v10",
        color: "Oatmeal",
        colorCode: "#d7cbb1",
        images: ["/images/dolomiti-oatmeal-1.jpg","/images/dolomiti-oatmeal-2.jpg"],
        sizes: ["S","M","L","XL"],
        price: 495,
      },
    ],
    craftDetails: [
      "Silk (55%) & Cashmere (45%)",
      "Full-zip with double puller",
      "Ribbed cuffs and hem",
    ],
    editorsNote: "A versatile layer ideal for travel and smart casual looks.",
  },

  {
    id: "p6",
    slug: "v-neck-silk-cashmere",
    name: "V Neck",
    material: "SILK-CASHMERE",
    price: 425,
    currency: "USD",
    categoryId: "c2",
    variants: [
      {
        id: "v11",
        color: "Oatmeal",
        colorCode: "#d6cab1",
        images: ["/images/vneck-oatmeal-1.jpg","/images/vneck-oatmeal-2.jpg"],
        sizes: ["S","M","L","XL"],
        price: 425,
      },
      {
        id: "v12",
        color: "Rust",
        colorCode: "#b2542f",
        images: ["/images/vneck-rust-1.jpg","/images/vneck-rust-2.jpg"],
        sizes: ["S","M","L","XL"],
        price: 425,
      },
    ],
    craftDetails: [
      "Lightweight gauge knit",
      "Fully fashioned, hand-linked",
    ],
    editorsNote: "Slim profile knit that dresses up or down easily.",
  },

  /* =================== PANTS =================== */
  {
    id: "p7",
    slug: "lightweight-chinos-cotton",
    name: "Lightweight Chinos",
    material: "COTTON",
    price: 210,
    currency: "USD",
    categoryId: "c4",
    variants: [
      {
        id: "v13",
        color: "Navy Blue",
        colorCode: "#132f66",
        images: ["/images/chinos-navy-1.jpg","/images/chinos-navy-2.jpg"],
        sizes: ["28","30","32","34","36"],
        price: 210,
      },
      {
        id: "v14",
        color: "Olive Green",
        colorCode: "#788c5a",
        images: ["/images/chinos-olive-1.jpg","/images/chinos-olive-2.jpg"],
        sizes: ["28","30","32","34","36"],
        price: 210,
      },
    ],
    craftDetails: [
      "Breathable mid-weight cotton twill",
      "Garment dyed for depth of colour",
    ],
    editorsNote: "The everyday trouser with a tailored taper.",
  },

  {
    id: "p8",
    slug: "pleated-trousers-wool",
    name: "Lightweight Pleated Trousers",
    material: "WOOL",
    price: 345,
    currency: "USD",
    categoryId: "c4",
    variants: [
      {
        id: "v15",
        color: "Navy Blue",
        colorCode: "#213f7a",
        images: ["/images/pleated-navy-1.jpg","/images/pleated-navy-2.jpg"],
        sizes: ["28","30","32","34","36"],
        price: 345,
      },
      {
        id: "v16",
        color: "Charcoal Grey",
        colorCode: "#3f3f3f",
        images: ["/images/pleated-charcoal-1.jpg","/images/pleated-charcoal-2.jpg"],
        sizes: ["28","30","32","34","36"],
        price: 345,
      },
    ],
    craftDetails: [
      "High-twist tropical wool",
      "Single pleat, side adjusters",
    ],
    editorsNote: "Airy drape with sharp lines for summer tailoring.",
  },

  /* =================== ACCESSORIES (BELTS …) =================== */
  {
    id: "p9",
    slug: "classic-suede-belt",
    name: "Belt",
    material: "CLASSIC SUEDE",
    price: 160,
    currency: "USD",
    categoryId: "c3",
    variants: [
      {
        id: "v17",
        color: "French Blue",
        colorCode: "#6e89b8",
        images: ["/images/belt-blue-1.jpg","/images/belt-blue-2.jpg"],
        sizes: ["S","M","L","XL"],
        price: 160,
      },
      {
        id: "v18",
        color: "Taupe",
        colorCode: "#b4a18f",
        images: ["/images/belt-taupe-1.jpg","/images/belt-taupe-2.jpg"],
        sizes: ["S","M","L","XL"],
        price: 160,
      },
    ],
    craftDetails: [
      "Italian suede leather",
      "Solid brass buckle",
    ],
    editorsNote: "Adds subtle texture to casual and smart looks.",
  },

  {
    id: "p10",
    slug: "reversible-leather-belt",
    name: "Reversible Belt",
    material: "CALF LEATHER",
    price: 195,
    currency: "USD",
    categoryId: "c3",
    variants: [
      {
        id: "v19",
        color: "Black / Brown",
        colorCode: "#000000",
        images: ["/images/belt-reversible-1.jpg","/images/belt-reversible-2.jpg"],
        sizes: ["S","M","L","XL"],
        price: 195,
      },
    ],
    craftDetails: [
      "Two-tone reversible strap",
      "Polished buckle",
    ],
    editorsNote: "One belt, two colours — perfect for travel.",
  },

  /* =================== JACKETS =================== */
  {
    id: "p11",
    slug: "linen-blazer",
    name: "Blazer",
    material: "LINEN",
    price: 945,
    currency: "USD",
    categoryId: "c5",
    variants: [
      {
        id: "v20",
        color: "Azure",
        colorCode: "#7bb1d3",
        images: ["/images/blazer-azure-1.jpg","/images/blazer-azure-2.jpg"],
        sizes: ["46","48","50","52","54"], // tuỳ bạn, chỉ là demo
        price: 945,
      },
    ],
    craftDetails: [
      "Half-lined linen blazer",
      "Soft shoulders, horn buttons",
    ],
    editorsNote: "Light tailoring that pairs with chinos or denim.",
  },

  /* =================== EXTRA SHIRT VARIANTS =================== */
  {
    id: "p12",
    slug: "portofino-linen-shirt",
    name: "Portofino Shirt",
    material: "LINEN",
    price: 265,
    currency: "USD",
    categoryId: "c1",
    variants: [
      {
        id: "v21",
        color: "Sky Blue",
        colorCode: "#a8c7e9",
        images: ["/images/portofino-sky-1.jpg","/images/portofino-sky-2.jpg"],
        sizes: ["S","M","L","XL"],
        price: 265,
      },
      {
        id: "v22",
        color: "Moss Green",
        colorCode: "#889c73",
        images: ["/images/portofino-moss-1.jpg","/images/portofino-moss-2.jpg"],
        sizes: ["S","M","L","XL"],
        price: 265,
      },
    ],
    craftDetails: [
      "Breathable long-staple linen",
      "Camp collar option",
    ],
    editorsNote: "Holiday-ready with an elegant drape.",
  },
];
