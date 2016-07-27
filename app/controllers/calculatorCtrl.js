/**
 * calculatorCtrl
 */

'use strict';

;(function() {

  angular
    .module('centurionApp')
    .controller('calculatorCtrl', function($scope) {

    $scope.config = {
      shotAmount: 25,
      numShots: 100,
      spillagePotential: 10
    }
    $scope.options = {
      container: 'bottle',
      capacity: 330,
      players: 4
    };

    $scope.calculate = function() {
      var perPerson = ($scope.config.shotAmount + $scope.config.spillagePotential) * $scope.config.numShots;
      var totalAlcohol = perPerson * $scope.options.players;
      var numContainers = totalAlcohol / $scope.options.capacity;
      numContainers = Math.ceil(numContainers);
      $scope.calculationMsg = numContainers;
    }

    $scope.init = function() {
      $scope.calculate();
    }

    $scope.init();

    $scope.$watch('options', function() {
        $scope.calculate();
    }, true);

  });  

})();