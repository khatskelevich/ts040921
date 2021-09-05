// T extends U ? X : Y

//type NonUndefined<T> = T extends undefined ? never : T;
//
// const a: NonUndefined<number | undefined | boolean> = 's';
//
// const b: Exclude<any, any>

// interface IHydrantA {
// 	name: string;
// 	type: 'A';
// }
//
// //
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

// type Arr = [() => IHydrantA, () => number];
//
// type FirstTupleElReturnType<T> = T extends [infer U, ...unknown[]]
// 	? U extends (...args: unknown[]) => infer R
// 		? R
// 		: never
// 	: never;
//
// const v: FirstTupleElReturnType<Arr> = { name: 'H1', type: 'A' };
//
// function fn(_a: string, _b: IHydrantA, _c: IHydrantB) {
// 	// number | string | boolean
// 	return true;
// }

// type FunctionParamsAndReturnType<T extends Function> = T extends (
// 	...args: [infer U, infer Y]
// ) => infer Z
// 	? U | Y | Z
// 	: never;

// type OnlyNonFunction<T> = T extends Function ? never : T;

// type FunctionParamsAndReturnType<T extends Function> = T extends (...args: infer Args) => infer Z
// 	? OnlyNonFunction<Args[keyof Args]> | Z
// 	: never;

// type FunctionParamsAndReturnType<T extends Function> = T extends (...args: infer Args) => infer Z
// 	? OnlyNonFunction<Args[Exclude<keyof Args, 'length'>]> | Z
// 	: never;
//
// const v1: FunctionParamsAndReturnType<typeof fn> = { a: 1 };
//
// //  Args[length | pop |push  ....] => number | fn
//
// type FlattenType<T> = T extends Array<infer U> ? FlattenType<U> : T;
//
// function flatten<Z extends unknown[]>(_x: Z): FlattenType<Z>[] {
// 	return [];
// }
//
// const arr1: number[] = flatten([1, 2, 3, 4]);
// const arr2: number[] = flatten([1, [2, 3], 3, 4]);
// const arr3: number[] = flatten([1, [2, [1, 2, 3]], 3, 4]);

// type RequiredOrOmit<T, U, Z extends string> = T extends true ? Required<U> : Omit<U, Z>;
//
// function test<T extends boolean>(show: T) {
// 	type result = RequiredOrOmit<T, { test: number; value?: () => string }, 'value'>;
// 	if (show) {
// 		return {
// 			test: 1,
// 			value: () => 'some text',
// 		} as result;
// 	}
// 	return {
// 		test: 1,
// 	} as result;
// }
//
// test(true).test;
// test(false);
