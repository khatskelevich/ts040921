// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
import 'reflect-metadata';

export function LogInput(
	target: any,
	key: string,
	descriptor: TypedPropertyDescriptor<(e: Event) => void>,
): TypedPropertyDescriptor<(e: Event) => void> {
	const originalValue = descriptor.value!;
	return {
		...descriptor,
		value(e: Event) {
			const value: string = (e.target as HTMLInputElement).value;
			console.log(`Input value in method ${key} of ${target.constructor.name} equal to ${value}`);
			return originalValue.call(this, e);
		},
	};
}

export function Debounce(ms: number) {
	let timeId: number | null;
	return (
		_target: any,
		_key: string,
		descriptor: TypedPropertyDescriptor<(e: Event) => void>,
	): TypedPropertyDescriptor<(e: Event) => void> => {
		const originalValue = descriptor.value!;
		return {
			...descriptor,
			value(e: Event) {
				if (timeId) {
					clearTimeout(timeId);
				}
				timeId = window.setTimeout(() => {
					return originalValue.call(this, e);
				}, ms);
			},
		};
	};
}

export function SavePersistence(target: any, key: string): void {
	const localKey = `ts040921_${target.constructor.name}_${key}`;

	const getter = () => {
		return localStorage.getItem(localKey);
	};

	const setter = (newValue: string) => {
		localStorage.setItem(localKey, newValue);
	};

	Object.defineProperty(target, key, {
		get: getter,
		set: setter,
		enumerable: true,
		configurable: true,
	});
}

export function CheckTypeAtRunTime(target: any, key: string): void {
	const { name: type } = Reflect.getMetadata('design:type', target, key);
	let value: any;

	Object.defineProperty(target, key, {
		get() {
			return value;
		},
		set(newValue: any) {
			const realType = typeof newValue;
			const expectedType = type.toLowerCase();
			if (realType != expectedType) {
				throw new Error(`Type of ${key} is not ${expectedType}. You tried to set ${realType}`);
			}
			value = newValue;
		},
		enumerable: true,
		configurable: true,
	});
}

const RANGE_KEY = 'design:RANGE_KEY';

export function RangeValidator(min: number, max: number) {
	return (target: any, key: string, index: number) => {
		console.log(key);
		const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
		existingRange[index] = [min, max];
		Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
	};
}

export function Validate(
	target: any,
	key: string,
	descriptor: TypedPropertyDescriptor<(...args: any[]) => void>,
): void {
	const originalValue = descriptor.value!;
	descriptor.value = function (...args: any[]) {
		const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
		for (const [paramIndex, range] of Object.entries(existingRange)) {
			const [min, max] = range as [number, number];
			const numParamIndex = Number(paramIndex);
			const paramValue = args[numParamIndex] as number;
			if (paramValue < min || paramValue > max) {
				throw new Error(`Error in ${target.constructor.name} instance.
				 Parameter of method ${key} on position ${numParamIndex + 1} out of range [${min}, ${max}].
				 Current value ${paramValue}
				 `);
			}
		}
		return originalValue.call(this, ...args);
	};
}
