import { PhoneSpecs } from './phone-specs.interface';

export interface Phone {
  id: number;
  brand: string;
  model: string;
  price: number;
  releaseYear: number;
  inStock: boolean;
  color: string;
  specs: PhoneSpecs;
}