const user: {
	readonly firstName: string;
	readonly age?: number;
} = {
	firstName: 'Ihor',
	age: 35,
};

user.age = 22;

// let userHashMap: {
// 	timestamp: Date,
// 	[ID: string]: typeof user | Date,
// } = {
// 	timestamp: new Date(),
// 	'asdasda123123': user,
// 	'asdasdasd': {
// 		firstName: 'Elena',
// 		age: 25,
// 	}
// }

let options: {
	timestamp: Date;
	type: 'ease-in' | 'ease-out';
	[data: `data-${string}`]: string;
} = {
	timestamp: new Date(),
	type: 'ease-in',
	'data-value': '1',
	'data-delay': '1',
};

let arr: readonly typeof user[] = [user];

arr.push(user);

arr[100] = user;

let tupleType: [ID: number, user: typeof user] = [112312, user];

let tt: [string, ...number[]] = ['name', 1, 2, 2];
tupleType = [112312, user, true];

tupleType.push(user);

tupleType[100] = user;
