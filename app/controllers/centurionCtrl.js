/**
 * centurionCtrl
 * 
 */

'use strict';

;(function() {

  angular
    .module('centurionApp')
    .controller('centurionCtrl', function($scope, ngAudio) {

    $scope.config = {
      numShots: 5,
      shotInterval: 2
    };

    $scope.game = {};

    $scope.timerRunning = false;
    $scope.timerStarted = false;

    $scope.audioGameStart = ngAudio.load('sounds/ahhhooo.mp3');
    $scope.audioDrink = ngAudio.load('sounds/bellcymbal1.mp3');
    $scope.audioGameComplete = ngAudio.load('sounds/mySound.mp3');

    $scope.initGame = function() {
        $scope.game = {
          gameInProgress: false,
          shots: [],
          shotsRemaining: $scope.config.numShots,
          shotsDrank: 0,
          gameCompleted: false
        };
        for (var i = $scope.config.numShots; i > 0; i--) {
            $scope.game.shots.push({shotNum:i, shotDrank: false});
        }
    };

    $scope.startGame = function () {
        $scope.audioGameStart.play();
        $scope.game.shotsRemaining = $scope.config.numShots
        $scope.game.gameInProgress = true;
        $scope.startTimer();
    };

    $scope.stopGame = function () {
        $scope.timerRunning = false;
        $scope.game.gameInProgress = false;
        $scope.$broadcast('timer-stop');
        $scope.$broadcast('timer-reset');
        $scope.initGame();
    };

    $scope.finishGame = function () {
        $scope.timerRunning = false;
        $scope.game.gameInProgress = false;
        $scope.game.gameCompleted = true;
    };

    $scope.checkGame = function () {
        $scope.$apply(function () {
            if ($scope.game.gameInProgress && $scope.game.shotsRemaining == 1) {
              $scope.game.shotsDrank++;
              $scope.game.shotsRemaining--;
              $scope.finishGame();
            } else if ($scope.game.gameInProgress) {
              $scope.audioDrink.play();
              $scope.game.shots[$scope.game.shotsDrank].shotDrank = true;
              $scope.game.shotsDrank++;
              $scope.game.shotsRemaining--;
              $scope.timerRunning = false;
              $scope.resetTimer();
              $scope.startTimer();
            }
        });
    };

    /* Timer methods */
    $scope.startTimer = function () {
        if (!$scope.timerStarted && !$scope.timerRunning) {
            $scope.$broadcast('timer-start');
            $scope.timerRunning = true;
            $scope.timerStarted = true;
        } else if (!$scope.timerRunning) {
            $scope.$broadcast('timer-resume');
            $scope.timerRunning = true;
        }
    };

    $scope.stopTimer = function () {
        if ($scope.timerRunning) {
            $scope.$broadcast('timer-stop');
            $scope.timerRunning = false;
            $scope.$broadcast('timer-reset');
        }
    };

    $scope.resetTimer = function () {
        $scope.$broadcast('timer-reset');
    };

  });  

})();