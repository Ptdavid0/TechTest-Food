declare type FoodItem = {
  company: Company;
  item: Item;
};

declare type Company = {
  name: string;
  logo: string;
};

declare type Item = {
  name: string;
  initialPrice: number;
  image: string;
  description: string;
  options?: Section[] | null;
};

declare type Section = {
  name: string;
  description: string;
  required: boolean;
  options?: Options[] | null;
  multiSelect?: boolean | null;
  singlePriced?: boolean | null;
  price?: number | null;
};

declare type Options = {
  name: string;
  price?: number | null;
  discountPrice?: number | null;
  type?: string | null;
};
