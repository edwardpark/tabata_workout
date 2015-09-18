
  angular.module('app', ['ngRoute','tabataWorkout'])
  .config(function ($routeProvider) {
        $routeProvider.when('/start', {
            templateUrl: 'views/start.html'
        });
        $routeProvider.when('/workout', {
            templateUrl: 'views/workout.html',
            controller: 'WorkoutController'
        });

    });

  angular.module('tabataWorkout', []);
