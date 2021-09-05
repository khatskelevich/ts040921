// T extends U ? X : Y

// type NonUndefined<T> = T extends undefined ? never : T;
//
// const a: NonUndefined<number | undefined | boolean> = 's';
//
// const b: Exclude<any, any>

interface IHydrantA {
	name: string;
	type: 'A';
}

//
// interface IHydrantB {
// 	name: string;
// 	type: 'B';
// }
//
// interface IHydrantC {
// 	name: string;
// 	type: 'C';
// }
//
// type Hydrant = IHydrantA | IHydrantB | IHydrantC;
// type Exclude<T, U> = T extends U ? never : T;
// const hAC: Exclude<Hydrant, IHydrantB | IHydrantC> = {
// 	name: 'MyHydrant',
// 	type: 'A',
// };

type Arr = [() => IHydrantA, () => number];

type FirstTupleElReturnType<T> = T extends [infer U, ...unknown[]]
	? U extends (...args: unknown[]) => infer R
		? R
		: never
	: never;

const v: FirstTupleElReturnType<Arr> = { name: 'H1', type: 'A' };

type FlattenType<T> = T extends (infer U)[] ? FlattenType<U> : T;

/**
 * Определяем тип результата по входящим аргументам
 * @param _x
 */
function flatten<Z extends unknown[]>(_x: Z): FlattenType<Z>[] {
	return [];
}

const arr1: number[] = flatten([1, 2]);
