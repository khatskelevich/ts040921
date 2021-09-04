// interface IUserAccount {
// 	firstName: string;
// 	age: number;
// }
//
// const acc = IUserAccount;

// const userAccount = {
// 	firstName: 'Ihor',
// 	age: 35
// }
//
// let person = userAccount;
// person = 1;
// class UserAccount {
// 	public name = 'Ihor';
// }
//
// const user: UserAccount = UserAccount;

// let num: number = 1;
// num = 0x0111;
//
// num.toFixed();
//
// let str: string = 'str';
//
// let bool: boolean = true;
//
// let und: undefined = undefined;
// let nill: null = null;
//
// let b: bigint = 5n;
//
// const key1: symbol = Symbol('key1');
// const key2: unique symbol = Symbol('key2');
// const key3 = Symbol('key3');
//
// let strictObj = {
// 	[key1]: 100,
// 	[key2]: 100,
// 	[key3]: 100,
// }
//
//
// let v1 = strictObj[key1];
// let v2 = strictObj[key2];
// let v3 = strictObj[key3];

//
// let anyType: any = 1;
// anyType();
// anyType = null;
// anyType.a.b = 1;
// anyType = () => {};
//
// let unkType: unknown = 1;
// unkType();
// unkType = null;
// unkType.a.b = 1;
// unkType = () => {};
//
//
// let v: void = undefined;
// function fn(): undefined {
//
// }
//
//
// function fn1(): never {
//   throw  new Error();
// }

// let nil: null = {a: 1};

// const num: 1 | 2 | 3 | 4 | 5 = 2;
//
// type AnimationType = 'ease';
// type AnimationDirection = 'in' | 'out' | 'out-in';

enum AnimationTypeEnum {
	EASE_IN = 'ease-in',
	EASE_OUT = 'ease-out',
}
//
//
// interface IAnimationOptions {
// 	delay: number;
// 	// type: `${AnimationType}-${AnimationDirection}`;
// 	type: AnimationTypeEnum
// }
//
// function animate(_options: IAnimationOptions) {
// 	if (_options.type === AnimationTypeEnum.EASE_IN) {
//
// 	}
// }
//
//
// animate({ delay: 1000, type: AnimationTypeEnum.EASE_IN });
//
// enum Size {
// 	X = 48,
// 	L = 44,
// 	XL = 52,
// 	S = 42,
// }
//
// let s = Size.S;

//
// type Cb = (a: number) => void;
//
// function fn(cb: Cb) {}
// function fn1(cb: Cb) {}
// function fn2(cb: Cb) {}

interface IFact {
	factId: number;
	userId: string;
	useTo: string;
}

let str: IFact[keyof IFact] = '1'; // number | string

const dataList: { action: string; data: IFact }[] = [];

type keysTypes = keyof IFact;

// let a = 's1' as const;
// let b: typeof a = 'ss';

const uniqueKey = () => {
	// 'factId' | 'userId' |  'useTo'
	return 'useTo' as const;
};

dataList.map((item: { action: string; data: IFact }) => {
	if (item.data[uniqueKey()]) {
	}
	return item;
});

Object.keys(AnimationTypeEnum).map((key: string) => {
	return AnimationTypeEnum[key as keyof typeof AnimationTypeEnum];
});
