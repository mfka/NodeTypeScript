import { IUser } from '../interfaces/user.interface';
import { IOrder } from '../interfaces/order.interface'
import { Table, Column, Model, HasMany, PrimaryKey } from 'sequelize-typescript';

@Table
export default class User extends Model<User> implements IUser {
    @Column
    firstName!: string;
    
    @Column
    lastName!: string;
    
    @Column
    email!: string;
}