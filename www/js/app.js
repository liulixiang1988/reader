(function(){

app = angular.module('reader', ['ionic', 'angularMoment']);

app.controller('RedditCtrl',function($http, $scope){
  $scope.stories = [];

  function loadStories(params, callback){
    var stories = []
    $http.get("http://www.reddit.com/r/funny/new/.json", {params: params})
      .success(function(response){
        angular.forEach(response.data.children, function(child){
          stories.push(child.data);
        });
        callback(stories);
      });
  }

  $scope.loadOlderStories = function(){
    var params = {};
    if($scope.stories.length > 0){
      params['after'] = $scope.stories[$scope.stories.length-1].name;
    }
    loadStories(params, function(oldStories){
      $scope.stories = $scope.stories.concat(oldStories);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  }

  $scope.loadNewerStories = function(){
    var params = {'before': $scope.stories[0].name};
    loadStories(params, function(newerStories){
      $scope.stories = newerStories.concat($scope.stories);
      $scope.$broadcast('scroll.refreshComplete');
    })
  }
});

app.run(function($ionicPlatform, amMoment) {
  amMoment.changeLocale('zh-cn');
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

}());
