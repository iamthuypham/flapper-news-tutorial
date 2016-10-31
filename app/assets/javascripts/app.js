/*global angular*/
//Create new module with routing for dynamic client side web app
var app = angular.module('flapperNews', ['ui.router','templates','Devise']);
//configure HOME state
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    //Setup home route
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      //Use resolve property to ensure posts are loaded everytime enter home page
      resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
      }
    })
    //Setup post route
    .state('posts', {
      url: '/posts/:id',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl',
      //Use resolve for post
      resolve: {
        postData: ['$stateParams', 'posts', function($stateParams, posts) {
          return posts.get($stateParams.id);
        }]
      }
    });
  //redirect to home if unspecified routes
  $urlRouterProvider.otherwise('home');
}])
// //Some fake posts
// .factory('posts', [function(){
//     var o = {
//       posts: [
//         {title: 'post 1', upvotes: 5},
//         {title: 'post 2', upvotes: 2},
//         {title: 'post 3', upvotes: 15},
//         {title: 'post 4', upvotes: 9},
//         {title: 'post 5', upvotes: 4}
//       ]
//     };
//     return o;
//   }])
// //Main Controller
// .controller('MainCtrl', [
//   '$scope',
//   //inject service posts to controller
//   'posts',
//   function($scope, posts){
//     $scope.test = 'Hello world!';
//     //Display data with ng-repeat //INJECT service posts to call the array posts
//     $scope.posts = posts.posts;
    
//     //Submit an input with ng-click, 
//     // $scope.addPost = function(){
//     //   $scope.posts.push({title: 'A new post!', upvotes: 0});
//     // };
//     //Submit an input with ng-submit, ng-model to tight input field with the object
//     // $scope.addPost = function(){
//     //   //prevent user submit blank post
//     //   if(!$scope.title || $scope.title === '') { return; }
//     //   $scope.posts.push({title: $scope.title, upvotes: 0});
//     //   $scope.title = '';
//     // };
//     //function for upvoting
//     $scope.incrementUpvotes = function(post) {
//       post.upvotes += 1;
//     };
//     //Submit a form with ng-show to apply link to the title
//     $scope.addPost = function(){
//       if(!$scope.title || $scope.title === '') { return; }
//       $scope.posts.push({
//         title: $scope.title,
//         link: $scope.link,
//         upvotes: 0,
//         comments: [
//           {author: 'Joe', body: 'Cool post!', upvotes: 0},
//           {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
//         ]
//       });
//       $scope.title = '';
//       $scope.link = '';
//     };
// }])
// //Post Controller
// .controller('PostsCtrl',[
//   '$scope',
//   '$stateParams',
//   'posts',
//   function($scope, $stateParams, posts){
//     $scope.post = posts.posts[$stateParams.id];
    
//     $scope.incrementUpvotes = function(comment) {
//       comment.upvotes += 1;
//     };
    
//     $scope.addComment = function(){
//       if($scope.body === '') {return; }
//       $scope.post.comments.push({
//         body: $scope.body,
//         author: 'user',
//         upvotes: 0
//       });
//       $scope.body = '';
//     };
    
    
//   }]);    
    
    
  
