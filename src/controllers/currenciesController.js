import currenciesTemplate from './../views/currencies.handlebars';
import $ from 'jquery';
import {getCurrencies} from '../models/currencies';


// debugger;

class CurrenciesController {

	constructor() {
		this.container = document.querySelector('#currencies-cont');
		// console.log(this.container);
	}

	// createCurrenciesTable(data) {

	// }

	render() {
		// return getCurrencies().then(() => {
		// 	return currenciesTemplate({date: '01.01.2001', currency: 'EURO'});
		// });
		// console.log(currencies);

		document.addEventListener('click', function(e) {
			if (e.target.tagName === 'LI') {
				console.log('click');
			}
		})

		return getCurrencies().then((data) => {
			return currenciesTemplate({date: '01.01.2001', currency: 'EURO', rates: data.rates});

		})

		// return currenciesTemplate({date: '01.01.2001', currency: 'EURO'});

	}
}

export default new CurrenciesController();