Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function (userId, doc) {
    // only allow posting if you're logged in
    return !!userId;
  }
});

Meteor.methods({
  postInsert: function (postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      url: String
    });

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});
