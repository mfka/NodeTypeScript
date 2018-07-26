import { IRestaurant } from './restaurant.interface';
import { IMeal } from './meal.interface';

export interface IOrder {
    restaurant: IRestaurant;
    meal: IMeal;
}