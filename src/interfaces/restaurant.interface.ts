import { IAddress } from './address.interface';
import { IRating } from './rating.interface';

export interface IRestaurant {
    name: string;
    phone: string;
    address: IAddress;
    vote: IRating;
}