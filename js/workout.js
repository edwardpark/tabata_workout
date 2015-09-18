angular.module('tabataWorkout')
  .controller('workoutCtrl', ['$scope', '$interval','$location', function ($scope, $interval,$location){
    var restPeriod;


    function workoutPlan(args) {
        this.exercises = [];
        this.name = args.name;
        this.title = args.title;
        this.restBetweenExercise = args.restBetweenExercise;

        this.totalWorkoutTime = function(){
          if (this.exercises.length == 0)
            return 0;
            var total = 0;
            angular.forEach(this.exercises, function(exercise){
              total = total + exercise.duration;
            });
          return this.restBetweenExercise * (this.exercises.length -1) + total;
        };

    }

    function Exercise(args) {
        this.name = args.name;
        this.title = args.title;
        this.description = args.description;
        this.image = args.image; //reference that marvel tutorial about this pattern

    }



  /////////////////////////////////////////////////////////////////
      var startWorkout = function(){
        $scope.workoutPlan = createWorkout();

        $scope.workoutTimeRemaining = $scope.workoutPlan.totalWorkoutTime();

        restPeriod = {
            details: new Exercise({
              name: 'rest',
              title:'Rest!!',
              description: "Deep Breathes! ",
              image: ""
            }),
            duration: $scope.workoutPlan.restBetweenExercise
        };

        $interval(function () {
            $scope.workoutTimeRemaining = $scope.workoutTimeRemaining - 1;
            }, 1000, $scope.workoutTimeRemaining
        );

        startExercise($scope.workoutPlan.exercises.shift());
      };//end startWorkout


       var startExercise = function(exercisePlan){
         $scope.currentExercise = exercisePlan;
         $scope.currentExerciseDuration = 0;
         $interval(function(){
              ++$scope.currentExerciseDuration;
           }
           , 1000 , $scope.currentExercise.duration
         ) //service wrapper over the window.setInerval method found on SOverflow
         .then(function () {
             var next = getNextExercise(exercisePlan);
             if (next) {
                 startExercise(next);
             } else {
                $location.path('/finish');
             }
         });//end of .then promise
       };//end startExercise

       var getNextExercise = function (currentExercisePlan) {
         var nextExercise = null;
         if (currentExercisePlan === restPeriod) {
            nextExercise = $scope.workoutPlan.exercises.shift();
         } else {
         if ($scope.workoutPlan.exercises.length != 0) {
            nextExercise = restPeriod;
         }
       }
     return nextExercise;
      };



      var createWorkout = function(){
        var workout = new workoutPlan({
          name: "Tabata Workout",
          title:"Tabata Workout",
          restBetweenExercise: 10
        });

      //  hard-code seed exercise data first then create persisted back
        workout.exercises.push({
          details: new Exercise({
            name: "jogInPlace",
            title:"Jog in Place!",
            description:"Chest up and Job in Place",
            image:"img/Crono.gif"
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
