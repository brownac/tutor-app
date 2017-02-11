import { Meteor } from 'meteor/meteor'
import Reservations from '../../imports/api/reservations'

Meteor.methods({
  	createReservation(firstName, lastName, email, subject, gradeLevel, courseCode, description, scheduled) {
		Reservations.insert({
			firstName : firstName,
			lastName : lastName,
			email : email,
			subject : subject,
			gradeLevel : gradeLevel,
			courseCode : courseCode,
			description : description,
			scheduled : false,
			createdAt : new Date()
		});
  	},

	deleteReservation(id) {
  		Reservations.remove(id);
	},

	updateStatus(id, scheduled) {
        Reservations.update(id, { $set: { scheduled : scheduled }});
	}

});
