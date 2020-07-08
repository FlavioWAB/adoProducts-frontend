interface IProductFilter {

}

export interface IProduct {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    avaliableUnits: number;
}

export interface IProductGrid {
    products: IProduct[];
    loading: boolean;
    filterString: string;
    triggerUpdate(): void;
}