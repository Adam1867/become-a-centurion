;(function() {

  'use strict';

  /**
   * Shot indicator
   * @author Adam Stringfellow
   * @ngdoc  Directive
   *
   * @example
   * <shot-indicator><shot-indicator/>
   *
   */
  angular
    .module('centurionApp')
    .directive('shotIndicator', shotIndicator);

  function shotIndicator() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/shot-indicator.html'
    };

    return directiveDefinitionObject;
  }

})();