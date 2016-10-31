/*global angular*/
app.controller('PostsCtrl',[
  '$scope',
  'posts',
  'postData',
  function($scope, posts, postData){
    $scope.post = postData;
    
    $scope.incrementUpvotes = function(comment){
      posts.upvoteComment(postData, comment);
    };
    
    $scope.addComment = function(){
      if($scope.body === '') { return; }
      posts.addComment(postData.id, {
        body: $scope.body,
        author: 'user',
      }).success(function(comment) {
        $scope.post.comments.push(comment);
      });
      $scope.body = '';
    };
    
    
  }]);