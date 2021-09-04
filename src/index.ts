import '../assets/css/style.css';
//
// /** let/const */
// let period = 10;
// const baseUrl = 'http://localhost:3000';
//
// /***object */
// const firstName = 'Igor';
// const account = {
// 	firstName,
// 	getName() {
// 		return this.firstName;
// 	},
// };
//
// /**... */
// const person = { ...account };
// let dates = [...[1, 2, 3]];
//
// /***destructoring */
// const { firstName: username } = account;
// const [firstDate] = dates;
//
// /***template string */
// function userMessage([start, end]: TemplateStringsArray, { firstName: myName }: typeof account) {
// 	return `${start}${myName}${end}`;
// }
//
// console.log(userMessage`Good day, ${person} !!!!`);
//
// /*** for of */
// for (const date of dates) {
// 	console.log(date);
// }
//
// /*** ()=> */
// const sum = (a: number, b: number) => a + b;
//
// /***Class */
//
// class Point {
// 	public x = 1;
//
// 	public getX() {
// 		return this.x;
// 	}
// }
//
// /***opt param */
// const user: any = {};
// const x = user?.info?.male;
//
// /***?? */
// let admin = 0;
// let p = admin ?? user;


// /** let/const */
// let period = 10
// const baseUrl = 'http://localhost:3000'

// /** object */
// const firstName = 'Igor'
// const account = {
//     firstName,
//     getName () {
//         return this.firstName
//     },
//     period,
//     baseUrl
// }
//
// /** spread */
// const person = {...account}
// let dates = [...[1, 2, 3]]
//
// /** destruct */
// const {firstName: username} = account
// const [firstDate] = dates
//
// /** template strings */
// function userMessage ([start, end]: TemplateStringsArray, {firstName}: typeof account) {
//     return `${start}${firstName}${end}`
// }
//
// console.log(`gd, ${person}`)
