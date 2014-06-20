import startApp from 'cliqember/tests/helpers/start-app';

var App, server;

module('Integration - Categories Page', {
    setup: function() {
        App = startApp();
        var categories = [
            {
                id: 1,
                name: 'Bugs Bunny'
            },
            {
                id: 2,
                name: 'Wile E. Coyote'
            },
            {
                id: 3,
                name: 'Yosemite Sam'
            }
        ];

        server = new Pretender(function() {
            this.get('/api/speakers', function(request) {
                return [200, {"Content-Type": "application/json"}, JSON.stringify({categries: categories})];
            });

            this.get('/api/categories/:id', function(request) {
                var category = categories.find(function(category) {
                    if (category.id === parseInt(request.params.id, 10)) {
                        return category;
                    }
                });

                return [200, {"Content-Type": "application/json"}, JSON.stringify({category: category})];
            });
        });

    },
    teardown: function() {
        Ember.run(App, 'destroy');
        server.shutdown();
    }
});

test('Should allow navigation to the category page from the landing page', function() {
    visit('/').then(function() {
        click('a:contains("Categories")').then(function() {
            equal(find('h3').text(), 'Categories');
        });
    });
});

test('Should list all category', function() {
    visit('/categories').then(function() {
        equal(find('a:contains("Bugs Bunny")').length, 1);
        equal(find('a:contains("Wile E. Coyote")').length, 1);
        equal(find('a:contains("Yosemite Sam")').length, 1);
    });
});

test('Should be able to navigate to a category page', function() {
    visit('/categories').then(function() {
        click('a:contains("Bugs Bunny")').then(function() {
            equal(find('h4').text(), 'Bugs Bunny');
        });
    });
});

test('Should be able visit a category page', function() {
    visit('/categories/1').then(function() {
        equal(find('h4').text(), 'Bugs Bunny');
    });
});