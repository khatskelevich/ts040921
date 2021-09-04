// // Objects
// interface IPoint {
// 	x: number;
// 	y: number;
// }
//
// type TPoint = {
// 	x: number;
// 	y: number;
// };
//
// let p: IPoint = {
// 	x: 1,
// 	y: 1,
// };
//
// // Function
//
// type TCb = (a: number) => number;
//
// // type TCb = { new (a: number): number };
// interface ICb {
// 	(a: number): number;
// }
//
//
// let fn: ICb = (_a: number) => {
// 	return 1;
// };

// Extends
interface IX {
	x: number;
}

interface IY {
	y: number;
}

type TX = {
	x: number;
};

type TY = {
	y: number;
};

interface IPoint extends IX, TY {
	z: number;
}

type TPoint = TX & IY & { z: number };

let p: IPoint = {
	x: 1,
	y: 1,
	z: 1,
};

// implements

type animationType = 'ease-in' | 'ease-out';

class Point implements IX, TY {
	public x!: number;

	public y!: number;
}

//
// interface IPoint {
// 	z: string
// }
