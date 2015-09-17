angular.module('tabataApp').controller('WorkoutController',['$scope', function($scope){
  function Exercise(args) {
      this.name = args.name;
      this.title = args.title;
      this.description = args.description;
      this.image = args.image; //reference that marvel tutorial about this pattern
      this.related = {};
  }
  
  function WorkoutPlan(args) {
      this.exercises = [];
      this.name = args.name;
      this.title = args.title;
      this.restBetweenExercise = args.restBetweenExercise;
  };

    var restPeriod;
    var workoutPlan;
    var startProgram = functon(){
      startWorkout();
    }
    startProgram(); //use traditional because want to control when start

}]);
