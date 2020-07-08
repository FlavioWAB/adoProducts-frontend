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

export interface IProductForm {
    loading: boolean;
    showFormAlert: boolean;
    onFinish(product: IProduct): void;
}