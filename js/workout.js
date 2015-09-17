



angular.module('tabataWorkout')
  .controller('workoutCtrl', ['$scope', '$interval', function ($scope, $interval){
    var restPeriod;
    var workoutPlan;

    function WorkoutPlan(args) {
        this.exercises = [];
        this.name = args.name;
        this.title = args.title;
        this.restBetweenExercise = args.restBetweenExercise;
    }

    function Exercise(args) {
        this.name = args.name;
        this.title = args.title;
        this.description = args.description;
        this.image = args.image; //reference that marvel tutorial about this pattern

    }



  /////////////////////////////////////////////////////////////////
      var startWorkout = function(){
        workoutPlan = createWorkout();

        restPeriod = {
            details: new Exercise({
              name: 'rest',
              title:'Rest!!',
              description: "Deep Breathes! ",
              image: ""
            }),
            duration: workoutPlan.restBetweenExercise
        };
        startExercise(workoutPlan.exercises.shift());
      };//end startWorkout


       var startExercise = function(exercisePlan){
         $scope.currentExercise = exercisePlan;
         $scope.currentExerciseDuration = 0;
         $interval(function(){
              ++$scope.currentExerciseDuration;
           }
           , 1000 , $scope.currentExercise.duration
         ); //service wrapper over the window.setInerval method found on SOverflow

       };//end startExercise


      var createWorkout = function(){
        var workout = new WorkoutPlan({
          name: "Tabata Workout",
          title:"Tabata Workout",
          restBetweenExercise: 10
        });

      //  hard-code seed exercise data first then create persisted back
        workout.exercises.push({
          details: new Exercise({
            name: "airSquat",
            title:"Air Squats",
            description:"Standing Air Squats",
            image:""
          }),
          duration: 20
        });

        workout.exercises.push({
          details: new Exercise({
            name: "burpee",
            title:"Burpees",
            description:"In Place Burpees",
            image:""

          }),
          duration: 20
        });

        workout.exercises.push({
          details: new Exercise({
            name: "pushUp",
            title:"Push Ups",
            description:"Chest to Deck Push Ups",
            image:""

          }),
          duration: 20
        });

        return workout;
      };//end createWorkout



     var startProgram = function(){
       startWorkout();
     }
     startProgram(); //use traditional because want to control when start




}]);//end  workoutController
