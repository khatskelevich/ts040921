"use strict";
// import '../assets/css/style.css';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
/** let/const */
var period = 10;
var baseUrl = 'http://localhost:3000';
/** object */
var firstName = 'Igor';
var account = {
    firstName: firstName,
    getName: function () {
        return this.firstName;
    },
    period: period,
    baseUrl: baseUrl
};
/** spread */
var person = __assign({}, account);
var dates = [1, 2, 3];
/** destruct */
var username = account.firstName;
var _a = __read(dates, 1), firstDate = _a[0];
/** template strings */
function userMessage(_a, _b) {
    var _c = __read(_a, 2), start = _c[0], end = _c[1];
    var firstName = _b.firstName;
    return "" + start + firstName + end;
}
console.log("gd, " + person);
