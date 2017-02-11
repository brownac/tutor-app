
import { Template } from 'meteor/templating'

import {Classes} from '../api/classes'

import Reservations from '../api/reservations'

import './adminPage.html';

Template.AdminPage.helpers({
  reservations() {
    return Reservations.find({});
  }
});

Template.AdminPage.events({
  'click #toggle-clicked'(event) {
      Reservations.update(this._id, { $set: { scheduled : !this.scheduled }});
    },

  'click .delete'() {
    Reservations.remove(this._id);
  }
});
