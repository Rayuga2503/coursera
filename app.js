( function (){
  'user strict';

angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController)

LunchCheckController.$inject=["$scope","$filter"];

function LunchCheckController($scope,$filter) {

  $scope.store="";
  $scope.message = function()
  {
     var str = $scope.store.split(',');

     if($scope.store=="")
     {
        // if(str[0]=="")
        // {
              $scope.temp = "Please enter data first";

        //  }
}
         else if(str.length<=3)
        {
            $scope.temp = "Enjoy!";
        }

  
    else {
      $scope.temp =" Too much!";
    }

};

}

})();
