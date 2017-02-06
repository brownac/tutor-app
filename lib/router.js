import { Classes } from '../imports/api/classes'
import { Reservations } from '../imports/api/reservations'


Router.configure({
  layoutTemplate: 'mainTemplate'
});

Router.route('/', {
	template: 'homepage'
});

Router.route('/reserve/:name', {
	template: 'ReservePage',
  	data: function() {
  		var currentClass = this.params.name;
        return Classes.findOne({ name : currentClass });
    }
});
