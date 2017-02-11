import { Meteor } from 'meteor/meteor'
import { Sparkpost } from 'meteor/agoldman:sparkpost-mail'
import Classes from '../imports/api/classes'
import Reservations from '../imports/api/reservations'

Meteor.startup(() => {
  // code to run on server at startup
	  Sparkpost.config('41f869fe72d40df7af0982193805f6c20c99915d');
});

Meteor.publish("reservations", () => {
	return Reservations.find({});
});

Meteor.publish("classes", () => {
    return Classes.find({});
});

Meteor.methods({
		sendEmail(to, from, subject, text) {
			Sparkpost.send({
			from: from,
			to: to,
			subject: subject,
			text: text
		});
	}
});
