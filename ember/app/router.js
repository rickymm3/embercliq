import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CliqemberENV.locationType
});

Router.map(function() {
    this.resource('cliqs', function() {
        this.route('show', {path: ':cliq_id'});
    });
    this.resource('categories', function() {
        this.route('show', {path: ':category_id'});
    });
    this.resource('posts', function(){
        this.route('show', {path:':post_id'})
    })
});

export default Router;
