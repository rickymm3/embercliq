import startApp from 'cliqember/tests/helpers/start-app';

var App;

module('Integration - Cliq Page', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
    }
});

test('Should navigate to the Cliq page', function() {
    visit('/').then(function() {
        click("a:contains('Cliq')").then(function() {
            equal(find('h3').text(), 'Cliq');
        });
    });
});