angular.module('tabataApp').controller('WorkoutController',['$scope','$interval', function($scope,$interval){
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

      //hard-code seed exercise data first then create persisted back
      workout.exercises.push({
        details: new Exercises({
          name: "airSquat",
          title:"Air Squats",
          description:"Standing Air Squats",
          imge:"",
          variations:[]
        }),
        duration: 20
      });

      workout.exercises.push({
        details: new Exercises({
          name: "burpee",
          title:"Burpees",
          description:"In Place Burpees",
          imge:"",
          variations:[]
        }),
        duration: 20
      });

      workout.exercises.push({
        details: new Exercises({
          name: "pushUp",
          title:"Push Ups",
          description:"Chest to Deck Push Ups",
          imge:"",
          variations:[]
        }),
        duration: 20
      });


    };//end createWorkout

   var startExercise = function(exercisePlan){
     $scope.currentExercise = exercisePlan;
     $scope.currentExerciseDuration = 0;
     $interval(function(){
          ++$scope.currentExerciseDuration;
       }
       , 1000 , $scope.currentExercise.duration
     ); //service wrapper over the window.setInerval method found on SOverflow

   };//end startExercise




}]);//end  workoutController
