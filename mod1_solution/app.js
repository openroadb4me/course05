(function () {
  'use strict';

  angular.module('LunchChecker', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
      $scope.lunchMenu = "";
      $scope.lunchMenuMsg = "";

      $scope.checkLunch = function () {
        if ($scope.lunchMenu == "") {
          $scope.lunchMenuMsg = "Please enter data first";
        } else {
          var l = $scope.lunchMenu.split(',').length;
          if (l <= 3) {
            $scope.lunchMenuMsg = "Enjoy!";
          } else {
            $scope.lunchMenuMsg = "Too much!";
          }
        }
      };
  }

})();
