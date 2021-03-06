
  angular.module('app', ['ngRoute','tabataWorkout'])
  .config(function ($routeProvider) {

        $routeProvider.when('/start', {
            templateUrl: 'views/start.html'
        });
        $routeProvider.when('/workout', {
            templateUrl: 'views/workout.html',
            controller: 'workoutCtrl'
        });
        $routeProvider.when('/finish', {
          templateUrl: 'views/finish.html'
        });
        $routeProvider.otherwise({
          redirectTo: '/start'
        });

    });

  angular.module('tabataWorkout', []);
