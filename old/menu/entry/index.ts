import { IListEl } from './data';
import './style.css';

export function generateMenu(list: IListEl[]): string {
	let html: string = '<ul>';
	for (const el of list) {
		const items: IListEl[] | undefined = el.items;
		html += `<li><a class=${items ? 'title' : ''}>${el.title}</a>`;
		if (items) {
			html += generateMenu(items);
		}
		html += '</li>';
	}
	html += '</ul>';
	return html;
}
