angular.module('tabataApp').controller('WorkoutController',['$scope', function($scope){
  var restPeriod;
  var workoutPlan;
  var startProgram = functon(){
    startWorkout();
  }
  startProgram(); //use traditional because want to control when start


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

/////////////////////////////////////////////////////////////////
    var startWorkout = function(){
      workoutPlan = createWorkout();
      restPeriod = {
        details: new Exercise({
          name: 'rest',
          title:'Rest!!',
          description: "Deep Breathes! ",
          img: ""
        }),
        duration: workoutPlan.restBetweenExercise;
      }
      startExercise(workoutPlan.exercises.shift());
    };//end startWorkout

    var createWorkout = function(){
      var workout = new WorkoutPlan({
        name: "Tabata Workout !",
        title:"Tabata Workout",
        restBetweenExercise: 10
      });
      
      workout.exercises


    };//end createWorkout






}]);
