/*global angular*/
app.controller('MainCtrl', [
  '$scope',
  //inject service posts to controller
  'posts',
  function($scope, posts){
    $scope.test = 'Hello world!';
    //Display data with ng-repeat //INJECT service posts to call the array posts
    $scope.posts = posts.posts;
    
    //Submit an input with ng-click, 
    // $scope.addPost = function(){
    //   $scope.posts.push({title: 'A new post!', upvotes: 0});
    // };
    //Submit an input with ng-submit, ng-model to tight input field with the object
    // $scope.addPost = function(){
    //   //prevent user submit blank post
    //   if(!$scope.title || $scope.title === '') { return; }
    //   $scope.posts.push({title: $scope.title, upvotes: 0});
    //   $scope.title = '';
    // };
    //function for upvoting
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
    //Submit a form with ng-show to apply link to the title
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
      $scope.title = '';
      $scope.link = '';
    };
}])