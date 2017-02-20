/**
 * Created by Abraham on 2/18/2017.
 */
(function(){
    'use strict';

    angular
        .module('app.home')
        .controller('Home', Home);

    function Home() {
        var vm = this;
        vm.title = "Welcome to the Homepage!"
    }
})();