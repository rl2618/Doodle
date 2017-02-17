'use strict';

angular.module('app.view2', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])
  .controller('View2Ctrl', [function() {
    var vm = this;
    vm.title = 'View2';
    vm.people = [
        {name: 'John Smith', city: 'Phoenix'},
        {name: 'Jane Doe', city: 'New York'},
        {name: 'Abraham Chiu', city: 'Dallas'}
    ];
  }]);

