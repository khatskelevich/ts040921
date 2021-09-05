interface IPerson {
	readonly name: string;
	readonly age: number;
	info: { male: boolean };
	subjects?: string[];
}

type NotReadonlyNonOptional<T> = {
	-readonly [P in keyof T]-?: T[P];
};

let p1: NotReadonlyNonOptional<IPerson> = {
	name: 'Ihor',
	age: 35,
	info: { male: true },
	subjects: [],
};

p1.name = 'Andrey';

let a: Partial<any>;

function update(_p: Partial<IPerson>) {}

update({ name: 'Vlad' });

// type RemoveKeyByValueAndUnion<T, E> = {
// 	[P in keyof T]: T[P] extends E ? never : P;
// }[keyof T];
//
// let p12: RemoveKeyByValueAndUnion<IPerson, { male: boolean } | number> = 'subjects';

// type RemoveByFieldName<T, E> = {
// 	[P in keyof T as Exclude<P, E>]: T[P];
// };
//
// const p22: RemoveByFieldName<NotReadonlyNonOptional<IPerson>, 'info' | 'subjects'> = {
// 	name: 'Ihor',
// 	age: 35,
// };
//
// p22.name = 'Ihor';

type CapitalizedKeysAndGetter<T> = {
	[P in keyof T as `get${Capitalize<P & string>}`]: () => T[P];
};

const getPerson: CapitalizedKeysAndGetter<NotReadonlyNonOptional<IPerson>> = {
	getName: () => 'Ihor',
	getAge: () => 35,
	getInfo: () => ({ male: true }),
	getSubjects: () => ['ts', 'angular'],
};

/*
	 name: string;  => getName: () => string
	 age: number; => getAge
	info: { male: boolean };
	subjects: string[];




 */

type TypedObject<T, U> = {
	[P in keyof T as `${U & string}${P & string}`]: T[P];
};

const createSimpleReducer = <T extends string>(name: T) => {
	const obj = {
		Pending: () => {
			return 1;
		},
		Success: () => {
			return 's';
		},
		Fail: () => {
			return false;
		},
	};
	const result: { [key: string]: Function } = {};
	for (const [key, value] of Object.entries(obj)) {
		result[`${name}${key}`] = value;
	}
	return result as TypedObject<typeof obj, T>;
};

const s: string = createSimpleReducer('salary').salarySuccess();

type FlattenType<T> = T extends (infer U)[] ? FlattenType<U> : T;

/**
 * Определяем тип результата по входящим аргументам
 * @param _x
 */
function flatten<Z extends unknown[]>(_x: Z): FlattenType<Z>[] {
	return [];
}

const arr1: number[] = flatten([1, 2]);
