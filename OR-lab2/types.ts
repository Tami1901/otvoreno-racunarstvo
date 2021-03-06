/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * List of products with shops
 */
export type ProductCatalog = Product[];

/**
 * Object representing a product with a shop
 */
export interface Product {
  id: number;
  name: string;
  short_description: string;
  main_image: string;
  images: string[];
  description: string;
  price: number;
  stock: number;
  rating: number;
  created_at: string;
  shop_id: number;
  shop_slug: string;
  shop_name: string;
  shop_description: string;
  shop_background_image: string;
  shop_address: string;
  shop_contact: string;
  shop_rating: number;
  shop_timezone: string;
  shop_created_at: string;
  [k: string]: unknown;
}
