import { Template } from 'meteor/templating';
 
import { Classes } from '../api/classes';
 
import './reserve.html';

Template.ReservePage.events({
	/** click the go button
		these are some events that happen when the go button and subsequent form are clicked around on
	**/
	'click .ui.animated.button': function(event) {
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
	}
});