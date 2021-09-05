// // function average(a: number, b: number, c: number): string {
// // 	const avg: number = (a + b + c) / 3;
// // 	return `Average is ${avg}`;
// // }
//
// // function average(a: number, b?: number, c?: number): string {
// // 	if (b === undefined) {
// // 		b = 0;
// // 	}
// // 	if (c === undefined) {
// // 		c = 0;
// // 	}
// // 	const avg: number = (a + b + c) / 3;
// // 	return `Average is ${avg}`;
// // }
//
// // function average(a: number, b: number = 0, c: number = 0): string {
// // 	const avg: number = (a + b + c) / 3;
// // 	return `Average is ${avg}`;
// // }
//
// // function isString(param: number | string): param is string {
// // 	return typeof param === 'string';
// // }
// //
// // function average(a: number, b: string): string;
// // function average(a: string, b: number): string;
// // function average(a: number, b: number, c: number): string;
// // function average(...args: (number | string)[]): string {
// // 	let total: number = 0;
// // 	for (const arg of args) {
// // 		// const guard = typeof arg === 'string';
// // 		if (isString(arg)) {
// // 			total += Number(arg);
// // 			continue;
// // 		}
// // 		total += arg;
// // 	}
// // 	const avg: number = total / args.length;
// // 	return `Average is ${avg}`;
// // }
// //
// // average(1);
// // average(1, 2);
// // average(1, '2');
// // average('1', 2);
// // average(1, 2, 1);
// // average(1, 2, 2, 3, 4);
// // average(1, 2, 2, 3, 4, 52);
// // average(1, 2, 's');
// // const v: number = average(1, 2, 3);
// //
// // function test(show: true): { test: number; value: () => string };
// // function test(show: false): { test: number };
// // function test(show: boolean) {
// // 	if (show) {
// // 		return {
// // 			test: 1,
// // 			value: () => 'some text',
// // 		};
// // 	}
// // 	return {
// // 		test: 1,
// // 	};
// // }
// //
// // test(true).value;
// // test(false).test;
// //
// // $('').on();
//
// import Event = JQuery.Event;
//
// function getFullName<T extends { name: string; surname: string }>(this: T, age: number) {
// 	return `${this.name}${this.surname} - ${age}`;
// }
//
// let acc = {
// 	name: 'Ihor',
// 	surname: 'Nepipenko',
// 	getFullName,
// };
//
// acc.getFullName(35);
//
// class UIEl {
// 	public addClick(_onClick: (this: void, e: Event) => void): void {}
// }
//
// class Handler {
// 	public info!: string;
//
// 	public onClick(this: this, _e: Event) {}
// }
//
// const h = new Handler();
// const el = new UIEl();
//
// el.addClick(h.onClick);

type FlattenType<T> = T extends (infer U)[] ? FlattenType<U> : T;

/**
 * Определяем тип результата по входящим аргументам
 * @param _x
 */
function flatten<Z extends unknown[]>(_x: Z): FlattenType<Z>[] {
	return [];
}

const arr1: number[] = flatten([1, 2]);

function ovr(b: string): string;
function ovr(b: number): number;
function ovr(b: number | string): number | string {
	console.log(b);
	return b;
}

const res = ovr(4) + ovr(2);
