import { ParsedUrlQuery } from "querystring";

export type Params = {
  slug: string | string[] | ParsedUrlQuery | undefined;
};

export type FetchedProductData = {
  categories: string[];
  discountPrice: number;
  id: number;
  imgURL: string;
  name: string;
  price: number;
};
