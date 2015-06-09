angular.module("reader.categoryStore", [])
.factory('CategoryStore', function(){
    var default_category = [
        {
            name: "Python",
            url: "http://www.reddit.com/r/Python/.json"
        },
        {
            name: "Django",
            url: "http://www.reddit.com/r/django/.json"
        },
        {
            name: "Flask",
            url: "http://www.reddit.com/r/flask/.json"
        },
        {
            name: "Python Coding",
            url: "http://www.reddit.com/r/pythoncoding/.json"
        },
        {
            name: "Daily Programmer",
            url: "http://www.reddit.com/r/dailyprogrammer/.json"
        },
        {
            name: "Android Dev",
            url: "http://www.reddit.com/r/androiddev/.json"
        },
        {
            name: "Cordova",
            url: "http://www.reddit.com/r/Cordova/.json"
        },
        {
            name: "PhoneGap",
            url: "http://www.reddit.com/r/Phonegap/.json"
        },
        {
            name: "Ionic",
            url: "http://www.reddit.com/r/ionic/.json"
        },
        {
            name: "CSS",
            url: "http://www.reddit.com/r/css/.json"
        },
        {
            name: "JavaScript",
            url: "https://www.reddit.com/r/javascript/.json"
        },
        {
            name: "ReactJS",
            url: "https://www.reddit.com/r/reactjs/.json"
        },
        {
            name: "AngularJS",
            url: "https://www.reddit.com/r/angularjs/.json"
        }
    ];
    var category = angular.fromJson(window.localStorage['category'] || angular.toJson(default_category));
    function persist(){
        window.localStorage['category'] = angular.toJson(category);
    };

    return {
        list: function(){
          return category;
        },

        get: function(name){
          for(var i = 0; i < category.length; i++){
            if(category[i].name === name){
              return category[i];
            }
          }
          return undefined;
        }
    };
})