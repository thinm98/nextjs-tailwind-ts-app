// src/mock/types.ts

export type Size = "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL";

export interface Category {
  id: string;
  name: string;
  slug: string;
}

// types.ts
export type StyleRole = "top" | "bottom" | "layer" | "accessory";

export type Product = {
  id: string;
  slug: string;
  name: string;
  material: string;
  price: number;
  currency: string;
  categoryId: string;
  variants: ProductVariant[];
  craftDetails: string[];
  editorsNote: string;
  styleRole?: StyleRole;   // <-- optional
};

export type ProductVariant = {
  id: string;
  color: string;
  colorCode: string;   // hex (nếu có). Không có thì để ""
  images: string[];
  sizes: string[];
  price: number;
};

