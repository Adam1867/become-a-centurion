;(function() {

  'use strict';

  /**
   * Shot timer
   * @author Adam Stringfellow
   * @ngdoc  Directive
   *
   * @example
   * <shot-time><shot-timer/>
   *
   */
  angular
    .module('centurionApp')
    .directive('shotTimer', shotTimer);

  function shotTimer() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/shot-timer.html'
    };

    return directiveDefinitionObject;
  }

})();