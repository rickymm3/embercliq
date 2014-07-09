import startApp from 'cliqember/tests/helpers/start-app';

var App, server;

module('Integration - Categories Page', {
    setup: function() {
        App = startApp();
        var categories = [
            { id: 1, name: 'Bugs Bunny', post_ids: [1,2] },
            { id: 2, name: 'Wile E. Coyote', post_ids: [3] },
            { id: 3, name: 'Yosemite Sam', post_ids: [4,5,6] }
        ];

        var posts = [
            { id: 1, title: "What's up with Docs?", category_id: 1 },
            { id: 2, title: "Of course, you know, this means war.", category_id: 1 },
            { id: 3, title: "Getting the most from the Acme categlog.", category_id: 2 },
            { id: 4, title: "Shaaaad up!", category_id: 3 },
            { id: 5, title: "Ah hates rabbits.", category_id: 3 },
            { id: 6, title: "The Great horni-todes", category_id: 3 }
        ];

        server = new Pretender(function() {
            this.get('/api/categories', function(request) {
                return [200, {"Content-Type": "application/json"}, JSON.stringify({categories: categories, posts:posts})];
            });

            this.get('/api/categories/:id', function(request) {
                var category = categories.find(function(category) {
                    if (category.id === parseInt(request.params.id, 10)) {
                        return category;
                    }
                });

                var categoryPosts = posts.filter(function(post) {
                    if (post.category_id === category.id) {
                        return true;
                    }
                });

                return [200, {"Content-Type": "application/json"}, JSON.stringify({category: category, posts: categoryPosts})];
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

test('Should list all speakers and number of posts', function() {
    visit('/categories').then(function() {
        equal(find('a:contains("Bugs Bunny (2)")').length, 1);
        equal(find('a:contains("Wile E. Coyote (1)")').length, 1);
        equal(find('a:contains("Yosemite Sam (3)")').length, 1);
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