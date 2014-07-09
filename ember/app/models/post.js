// ember/app/models/post.js
import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    category: DS.belongsTo('category',{ embedded: 'always'})
});