import Navigo from 'navigo';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './style.css';
import axios from 'axios';
import '../node_modules/regenerator-runtime/runtime.js';

import homeController from './controllers/homeController';
import currenciesController from './controllers/currenciesController';
import historyController from './controllers/historyController';

const router = new Navigo(null, true, '#');

const render = (html) => {
    document.getElementById('content').innerHTML = html;
}

router
    .on('/', () => {
        render(homeController.render());
    })
    .on('/currencies', () => {
        currenciesController.render()
            .then((html) => { 
                render(html);
            });
    })
    .on('/history', () => {
        render(historyController.render());
    })
    .resolve();




// console.log(getCurrencies().then((data) => {console.log(data)}));


// (async () => {console.log(await getCurrencies())})();