import { Classes } from '../imports/api/classes'
import  Reservations from '../imports/api/reservations'
import { Meteor } from 'meteor/meteor'


Router.configure({
  layoutTemplate: 'mainTemplate'
});

Router.route('/', {
	template: 'homepage',
  data: function() {
    return Meteor.users.findOne({ _id : Meteor.userId() });
  }
});

Router.route('/reserve/:route', {
	template: 'ReservePage',
  	data: function() {
        return Classes.findOne({ route : this.params.route });
    }
});

Router.route('/sessions/:_id', {
	template: 'UserHome',
    data: function () {
	    var email = Meteor.user().emails[0].address;
        var query = Reservations.findOne({ email : email });
        return query;
    }
});
