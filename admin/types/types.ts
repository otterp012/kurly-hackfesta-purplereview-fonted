import { ParsedUrlQuery } from "querystring";

export type Params = {
  slug: string | string[] | ParsedUrlQuery | undefined;
};

export type FetchedProductData = {
  categories: string[];
  discountPrice: number;
  itemId: number;
  imgURL: string;
  name: string;
  price: number;
  questionList: {
    answerlist: string[];
    asking: string;
    questionId: number;
  }[];
};
