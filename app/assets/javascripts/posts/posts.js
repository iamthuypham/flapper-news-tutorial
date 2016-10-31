/*global angular*/
app.factory('posts', [
  '$http', //Inject $http service
  function($http){
    var o = {
      posts: [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
      ]
    };
    //Retrieve all posts
    o.getAll = function() {
      return $http.get('/posts.json').success(function(data){
        angular.copy(data, o.posts);
      });
    };
    //Create new posts
    o.create = function(post) {
      return $http.post('/posts.json', post).success(function(data){
        o.posts.push(data);
        
      });
    };
    //Upvoting post
    o.upvote = function(post) {
      return $http.put('/posts/' + post.id + '/upvote.json')
        .success(function(data){
          post.upvotes += 1;
        });
    };
    //Retrive single post
    o.get = function(id) {
      return $http.get('/posts/' + id + '.json').then(function(res){
        return res.data;
      });
    };
    //Add comment
    o.addComment = function(id, comment) {
      return $http.post('/posts/' + id + '/comments.json', comment);
    };
    //Upvote for comment
    o.upvoteComment = function(post, comment) {
      return $http.put('/posts/' + post.id + '/comments/'+ comment.id + '/upvote.json')
        .success(function(data){
          comment.upvotes += 1;
        });
    };
    return o;
    // //Create new post
    // o.create = function(post) {
    //   return $http.post('/posts.json', post).success(function(data){
    //     o.posts.push(data);
    //   });
    // };
    
  }])