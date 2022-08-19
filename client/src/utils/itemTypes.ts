export type CategoryTreeObject = {
  catId: number;
  name: string;
};

export interface Item {
  categories: number[];
  imagesCSV: string;
  manufacturer: string;
  title: string;
  asin: string;
  brand: string;
  productGroup: string;
  color: string;
  packageHeight: number;
  packageLength: number;
  packageWidth: number;
  packageQuantity: number;
  isAdultProduct: boolean;
  author: string;
  binding: string;
  eanList: string[];
  upcList: boolean;
  frequentlyBoughtTogether?: string[];
  features: string[];
  description: string;
  itemHeight: number;
  itemLength: number;
  itemWidth: number;
  itemWeight: number;
  categoryTree: CategoryTreeObject[];
}
