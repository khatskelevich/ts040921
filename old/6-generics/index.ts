// interface IRegularUser {
// 	id: number;
// 	age: number;
// 	info: {
// 		male: boolean
// 	};
// }
//
// interface IAdmin{
// 	id: string;
// 	age: number;
// 	info: {
// 		male: boolean
// 	};
// }
// // interface, type, class, fn
//
// interface IBaseInfo {
// 	male: boolean
// }
//
// interface IUser<Info extends IBaseInfo = IBaseInfo, ID = number> {
// 	id: ID;
// 	age: number;
// 	info: Info;
// }
//
// let user: IUser = {
// 	id: 123123,
// 	age: 25,
// 	info: {
// 		male: true,
// 	},
// };
//
// let admin: IUser<{ male: boolean, subjects: string[] }, string> = {
// 	id: '123123',
// 	age: 25,
// 	info: {
// 		male: true,
// 		subjects: ['ts', 'js'],
// 	},
// };
//
//
// interface IUser {
// 	name: string;
// 	age: number;
// }
//
// interface IProduct {
// 	name: string;
// 	price: number;
// }
//
// interface IState {
// 	user: IUser;
// 	products: IProduct[];
// 	cart: IProduct[];
// }
//
// const state: IState = {
// 	user: { name: 'Ihor', age: 35 },
// 	products: [
// 		{ name: 'IPhone 8', price: 100 },
// 		{ name: 'IPhone XR', price: 200 },
// 	],
// 	cart: [],
// };
// type Select<T> = <K extends keyof T>(state: T, field: K) => T[K];
// const select: Select<IState> = (store: any, field: any) => store[field];
//
// const user: IUser = select(state, 'user');
// const products: IProduct[] = select(state, 'cart');
