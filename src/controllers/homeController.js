import homeTemplate from './../views/home.handlebars';
import $ from 'jquery';

class HomeController {
	render() {
		return homeTemplate();
	}
}

export default new HomeController();