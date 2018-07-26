import { IRating } from './rating.interface';
import { IRestaurant } from './restaurant.interface';

export interface IMeal {
    restaturant: IRestaurant;
    name: string;
    cost: number;
    vote: IRating;
}