import { Mongo } from 'meteor/mongo';

const Reservations = new Mongo.Collection('reservations');

Reservations.allow({
	insert: function () {
		return true;
	},
	update: function () {
		return true;
	},
	remove: function () {
		return true;
	}
});

export default Reservations;