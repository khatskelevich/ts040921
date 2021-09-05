import {
	CheckTypeAtRunTime,
	Debounce,
	LogInput,
	RangeValidator,
	SavePersistence,
	Validate,
} from './decorators';

class SearchComponent {
	@CheckTypeAtRunTime
	@SavePersistence
	public inputValue!: string;

	public constructor(private readonly inputEl: HTMLInputElement) {
		console.log(this.inputValue);
		this.inputEl.addEventListener('input', this.onSearch.bind(this));
	}

	@Debounce(300)
	@LogInput
	private onSearch(_e: Event): void {
		this.inputValue = (_e.target as HTMLInputElement).value;
	}
}

const inputEl: HTMLInputElement = document.querySelector('input') as HTMLInputElement;

const sC = new SearchComponent(inputEl);

setTimeout(() => {
	(sC.inputValue as any) = 123123;
}, 7000);

class Calculator {
	@Validate
	public updatePercentage(_oldValue: number, @RangeValidator(30, 70) _newValue: number) {
		console.log(_oldValue, _newValue);
	}
}

const calc = new Calculator();
calc.updatePercentage(0, 50);

setTimeout(() => {
	calc.updatePercentage(50, 80);
}, 7000);

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
