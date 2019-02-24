import historyTemplate from './../views/history.handlebars';
import $ from 'jquery';

class HistoryController {

	render() {

		return historyTemplate();
	}
}

export default new HistoryController();