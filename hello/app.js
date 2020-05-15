( function () {

  'use strict'

  angular.module("myApp",[])

  .controller("LunchCheckController" , LunchCheckController)

  LunchCheckController.$inject = ["$scope","$filter"];

  function LunchCheckController($scope,$filter) {

    $scope.name = "";
    $scope.parse = function () {
      var arr = $scope.name.split(',');

    if (arr.length<4) {
        if(arr[0]==""){
          $scope.name = "Please enter data first";
        }
        else{

          $scope.name = "Enjoy!";
          
        }
    }
      else{
        $scope.name = "Too much!";
      }
  }
}


})();
