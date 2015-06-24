Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'not_found',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'})

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});
Router.route('/submit', {name: 'postSubmit'});
