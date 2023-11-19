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
  sections?: Section[] | null;
};

declare type Section = {
  name: string;
  description: string;
  required: boolean;
  type: string;
  singlePriced?: boolean;
  isAddition?: boolean;
  options?: Options[];
};

declare type Options = {
  name: string;
  price?: number;
  discountPrice?: number;
};
