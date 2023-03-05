interface IDataFashion {
    name: string;
    brand: string;
    image: string;
    price: string;
    afterDiscount: string
}

export const newArrival: IDataFashion[] = [
    {
        name: "Nike Air Max SC",
        brand: "Nike",
        image: "./src/assets/nike1.webp",
        price: "Rp 1,099,000",
        afterDiscount: "Rp 999,000"
    },
    {
        name: "JERSEY TABELA 23",
        brand: "Adidas",
        image: "./src/assets/adidas1.webp",
        price: "Rp 330,000",
        afterDiscount: "Rp 289,000"
    },
    {
        name: "Puma Running Cap III",
        brand: "Puma",
        image: "./src/assets/puma1.jpg",
        price: "Rp 259,000",
        afterDiscount: "Rp 150,000"
    },
    {
        name: "Sauvage Eau De Parfum",
        brand: "Christian Dior",
        image: "./src/assets/dior1.jpg",
        price: "Rp 1,842,000",
        afterDiscount: "Rp 1,650,000"
    },
];


export const shoesData: IDataFashion[] = [
    {
        name: "Nike Tempo",
        brand: "Nike",
        image: "./src/assets/nike2.webp",
        price: "Rp 2,999,000",
        afterDiscount: "Rp 2,548,000"
    },
    {
        name: "Nike Air Force 1 '07 LV8",
        brand: "Nike",
        image: "./src/assets/nike3.webp",
        price: "Rp 1,909,000",
        afterDiscount: "Rp 1,800,000"
    },
    {
        name: "Adizero Boston 11",
        brand: "Adidas",
        image: "./src/assets/adidas2.jpg",
        price: "Rp 2,300,000",
        afterDiscount: "Rp 2,000,000"
    },
    {
        name: "Duramo SL 2.0",
        brand: "Adidas",
        image: "./src/assets/adidas3.webp",
        price: "Rp 900,000",
        afterDiscount: "Rp 700,000"
    },
];