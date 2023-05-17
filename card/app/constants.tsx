export interface IPRODUCTS {
    id: number,
    image: string,
    price: number,
    productName: string,
    productDescription: string,
    colors: string[];
}

const PRODUCTS: IPRODUCTS[] = [
  {
    id: 0,
    image: '/image.svg',
    price: 100,
    productName: 'Zebronics head phone',
    productDescription: 'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.',
    colors: ['#EE4444', '#3C81F6', '#000000']
  }
]

export default PRODUCTS;