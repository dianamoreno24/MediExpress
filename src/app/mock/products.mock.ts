export interface Product {
  id: number;
  photoUrl: string;
  name: string;
  qty: number;
  measurementUnit: string;
  price: number;
  careType: CareType;
  brand: string;
  applicationTime: string;
}

export enum CareType {
  bodily = 'bodily',
  facial = 'facial',
}

const products: Product[] = [
  {
    id: 1,
    photoUrl: '/assets/bodily_bioderma_dia.jpg',
    name: 'Atoderm',
    qty: 500,
    measurementUnit: 'ml',
    price: 55000,
    careType: CareType.bodily,
    brand: 'Bioderma',
    applicationTime: 'day',
  },
  {
    id: 2,
    photoUrl: '/assets/bodily_bioderma_noche.jpg',
    name: 'Sebium',
    qty: 500,
    measurementUnit: 'ml',
    price: 50000,
    careType: CareType.bodily,
    brand: 'Bioderma',
    applicationTime: 'night',
  },
  {
    id: 3,
    photoUrl: '/assets/bodily_clinique_dia.jpg',
    name: 'Crema Exfoliante Corporal',
    qty: 250,
    measurementUnit: 'ml',
    price: 150000,
    careType: CareType.bodily,
    brand: 'Clinique',
    applicationTime: 'day',
  },
  {
    id: 4,
    photoUrl: '/assets/bodily_clinique_noche.jpg',
    name: 'Loción Corporal',
    qty: 250,
    measurementUnit: 'ml',
    price: 200000,
    careType: CareType.bodily,
    brand: 'Clinique',
    applicationTime: 'night',
  },
  {
    id: 5,
    photoUrl: '/assets/bodily_loreal_dia.jpg',
    name: 'Nutrilift Firmeza',
    qty: 400,
    measurementUnit: 'ml',
    price: 120000,
    careType: CareType.bodily,
    brand: 'Loreal',
    applicationTime: 'day',
  },
  {
    id: 6,
    photoUrl: '/assets/bodily_loreal_noche.jpg',
    name: 'Exfotonic',
    qty: 350,
    measurementUnit: 'ml',
    price: 95000,
    careType: CareType.bodily,
    brand: 'Loreal',
    applicationTime: 'night',
  },
  {
    id: 7,
    photoUrl: '/assets/facial_loreal_dia.jpg',
    name: 'Crema con nutrientes Loreal',
    qty: 25,
    measurementUnit: 'ml',
    price: 30000,
    careType: CareType.facial,
    brand: 'Loreal',
    applicationTime: 'day',
  },
  {
    id: 8,
    photoUrl: '/assets/facial_bioderma_dia.jpg',
    name: 'Crema Facial día',
    qty: 25,
    measurementUnit: 'ml',
    price: 30000,
    careType: CareType.facial,
    brand: 'Bioderma',
    applicationTime: 'day',
  },
  {
    id: 9,
    photoUrl: '/assets/facial_loreal_noche.jpg',
    name: 'Exfoliante con Aloe Vera Loreal',
    qty: 25,
    measurementUnit: 'ml',
    price: 100000,
    careType: CareType.facial,
    brand: 'Loreal',
    applicationTime: 'night',
  },
  {
    id: 10,
    photoUrl: '/assets/facial_bioderma_noche.jpg',
    name: 'Crema Limpiadora Noche',
    qty: 45,
    measurementUnit: 'ml',
    price: 105000,
    careType: CareType.facial,
    brand: 'Bioderma',
    applicationTime: 'night',
  },
  {
    id: 11,
    photoUrl: '/assets/facial_clinique_dia.jpg',
    name: 'Serum Rejuvenecedor',
    qty: 40,
    measurementUnit: 'ml',
    price: 150000,
    careType: CareType.facial,
    brand: 'Clinique',
    applicationTime: 'day',
  },
  {
    id: 12,
    photoUrl: '/assets/facial_clinique_noche.jpg',
    name: 'Crema facial anti-age noche',
    qty: 50,
    measurementUnit: 'ml',
    price: 200000,
    careType: CareType.facial,
    brand: 'Clinique',
    applicationTime: 'night',
  },
];

export default products;
