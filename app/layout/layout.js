/**
 * Created by Abraham on 2/18/2017.
 */
(function(){
    'use strict';

    angular
        .module('app.layout')
        .controller('Layout', Layout);

    function Layout() {
        var vm = this;

        vm.title = 'Things I Made Viewing Page';
        vm.subtitle = 'Welcome to the 3D Modeling Page!';

    }
})();