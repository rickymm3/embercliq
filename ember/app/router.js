import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CliqemberENV.locationType
});

Router.map(function() {
    this.route('cliq');
    this.resource('categories', function() {
        this.route('show', {path: ':category_id'});
    });
});

export default Router;
