/**
** TODO:
** implement form validation (somehow)
**/

import { Template } from 'meteor/templating'

import {Classes} from '../api/classes'

import Reservations from '../api/reservations'

import './reserve.html';

Template.ReservePage.helpers({
	reservations() {
		return Reservations.find({});
	}
});

Template.ReservePage.events({
	/** click the go button
		these are some events that happen when the go button and subsequent form are clicked around on
	**/
	'click .ui.animated.button'(event) {
		$('.ui.form').slideDown({
			duration: 1000,
			easing: "easeInExpo"
		});
		$('.dropdown').dropdown();
		$('#grade-level').on('change',function(){
			var selection = $(this).val();
			if ( selection == "college or university" ) {
				$('.code').removeClass('hide');
			}
		});
	},

	// click the back button
	'click #back-button'(event) {
		Router.go('/');
	},

	'submit .ui.form'(event) {
		event.preventDefault();
		// submit form
		const firstName = event.target.firstName.value;
		const lastName = event.target.lastName.value;
		const email = event.target.email.value;
		const subject = event.target.subject.value;
		const gradeLevel = event.target.gradeLevel.value;
		const courseCode = event.target.courseCode.value;
		const description = event.target.description.value;

		Reservations.insert({
			firstName : firstName,
			lastName : lastName,
			email : email,
			subject : subject,
			gradeLevel : gradeLevel,
			courseCode : courseCode,
			description : description,
			status : "Pending"
		});
		Meteor.call('sendEmail',
					email,
					'tutoring@austincbrown.com',
					'Tutoring with Austin!',
					'Hey ' + firstName + '! This an email confirming that you contacted me for help with ' + subject + '. I will reach out to you in the next few days to talk about when would work best for you. Thanks! -Austin');
		toastr.success('Thanks for contacting me! I will be in touch soon.', 'Form submitted!');
		Router.go('/');
	}
});
