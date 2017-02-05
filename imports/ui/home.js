import { Template } from 'meteor/templating';
 
import { Classes } from '../api/classes';
 
import './home.html';
 
Template.homepage.helpers({
  classes: function () {
    var regexp = new RegExp(Session.get('search/keyword'), 'i');
    $('#class').removeClass('hide');
    return Classes.find({name: regexp});
  }
});

Template.homepage.events({
  'keyup #search-box': function(event) {
  	var className = $('#search-box').val();
    Session.set('search/keyword', className);
  }
});
