import '../assets/css/style.css';
import { generateMenu } from './menu/entry';
import { list } from './menu/entry/data';

declare const vk: any;

$('.menu')
	.html(generateMenu(list))
	.on('click', (e: Event) => {
		const el: HTMLElement = e.target as HTMLElement;
		if (!el.classList.contains('title')) {
			return;
		}
		const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
		parentLi.classList.toggle('menu-open');
	});
// const menu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
// menu.innerHTML = generateMenu(list);
// menu.addEventListener('click', (e: MouseEvent) => {
// 	const el: HTMLElement = e.target as HTMLElement;
// 	if (!el.classList.contains('title')) {
// 		return;
// 	}
// 	const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
// 	parentLi.classList.toggle('menu-open');
// });
