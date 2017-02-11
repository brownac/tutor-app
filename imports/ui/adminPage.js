
import { Template } from 'meteor/templating'

import Classes from '../api/classes'

import Reservations from '../api/reservations'

import './adminPage.html';

Meteor.subscribe("reservations");
Meteor.subscribe("classes");

Template.AdminPage.helpers({
  reservations() {
    return Reservations.find({});
  }
});

Template.AdminPage.events({
  'click #toggle-clicked'() {
      Meteor.call("updateStatus", this._id, !this.scheduled);
    },

  'click .delete'() {
      Meteor.call("deleteReservation", this._id);
  }
});
