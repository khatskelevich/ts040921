// function Fn() {
// }
//
// const inst = new Fn();

type Constructable = new (...args: any[]) => any;

function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
	// eslint-disable-next-line @typescript-eslint/no-shadow
	return class extends BC {
		public timestamp = new Date();
	};
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
	// eslint-disable-next-line @typescript-eslint/no-shadow
	return class extends BC {
		public tags = ['ts', 'js'];
	};
}

type SN = string | number;

class BasePoint {
	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	#p: number = 1;

	public constructor(x: string, y: number, z: number);
	public constructor(x: number, y: string, z: number);
	public constructor(public x: SN, protected y: SN, private z: number) {}

	public sum(): number {
		return Number(this.x) + Number(this.y) + this.z + this.#p;
	}
}

class Point extends Tagged(Timestamped(BasePoint)) {
	public constructor(x: string, y: number, z: number) {
		super(x, y, z);
	}

	public override sum(): number {
		// do something
		return super.sum();
	}
}

const p = new Point('1', 1, 1);

class Singleton {
	private static instance: Singleton;

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() {}

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}
}

// class SingletonStaticFeature {
// 	private static instance: SingletonStaticFeature;

// 	static {
// 		console.log('Initiate');

// 		if (!SingletonStaticFeature.instance) {
// 			SingletonStaticFeature.instance = new SingletonStaticFeature();
// 		}
// 	}

// 	public constructor() {
// 		return SingletonStaticFeature.instance;
// 	}

// }

// const inst1 = new SingletonStaticFeature();
// const inst2 = new SingletonStaticFeature();
// const inst3 = new SingletonStaticFeature();
// const inst4 = new SingletonStaticFeature();
// const inst5 = new SingletonStaticFeature();
// console.log(inst3 === inst5)

abstract class AbstractControl<T = string> {
	public abstract model: T;

	public abstract getModel(): T;

	public onFocus() {}

	public onBlur() {}
}

abstract class AbstractControlWithSet<T = string> extends AbstractControl<T> {
	public abstract setModel(model: T): void;
}

class SentryxSearch extends AbstractControlWithSet {
	public model = '';

	public override getModel(): string {
		return this.model;
	}

	public override setModel(_model: string) {}
}

interface IDropDownItem {
	text: string;
	value: string;
}

class SentryxDropdown extends AbstractControl<IDropDownItem[]> {
	public model: IDropDownItem[] = [];

	public override getModel(): IDropDownItem[] {
		return this.model;
	}
}
