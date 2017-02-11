import { Template } from 'meteor/templating'
 
import Classes from '../api/classes'

import Reservations from '../api/reservations'

import {Meteor} from 'meteor/meteor'

import './userHome.html'

Meteor.subscribe("reservations");
Meteor.subscribe("classes");

Template.UserHome.helpers({
	reservations() {
		var email = Meteor.user().emails[0].address;
		return Reservations.find({email : email});
	}
});

Template.UserHome.events({
	'click #logout'(event) {
		event.preventDefault();
		Meteor.logout(() => {
			Router.go('/');
		});
	},
	'click #cancel'() {
	    Meteor.call("deleteReservation", this._id);
	}
});