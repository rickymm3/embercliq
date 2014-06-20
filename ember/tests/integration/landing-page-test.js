import startApp from 'cliqember/tests/helpers/start-app';

var App;

module('Integration - Landing Page', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
    }
});

test('Should welcome me to Cliq Ember', function() {
    visit('/').then(function() {
        equal(find('h2#title').text(), 'Welcome to Cliq Ember');
    });
});

test('Should allow navigating back to root from another page', function() {
    visit('/cliq').then(function() {
        click('a:contains("Home")').then(function() {
            notEqual(find('h3').text(), 'Cliq');
        });
    });
});