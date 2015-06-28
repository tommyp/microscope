Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function (userId, doc) {
    // only allow posting if you're logged in
    return !!userId;
  }
})
