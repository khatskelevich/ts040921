// import '../assets/css/style.css';

/** let/const */
let period = 10;
const baseUrl = 'http://localhost:3000';

/** object */
const firstName = 'Igor'
const account = {
    firstName,
    getName() {
        return this.firstName
    }, 
    period,
    baseUrl
}

/** spread */
const person = {...account}
let dates = [...[1,2,3]]

/** destruct */
const {firstName: username} = account
const [firstDate] = dates

/** template strings */
function userMessage([start, end]:TemplateStringsArray, {firstName}: typeof account) {
    return `${start}${firstName}${end}`
}

console.log(`gd, ${person}`);
