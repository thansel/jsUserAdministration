define([
    'jquery'
    , 'underscore'
    , 'angular.min'
    , 'modules/user/main'],

    function MainApplication(jq, us, an, userModule) {

        var initialize = function () {

            userModule.initialize();

            angular.bootstrap(window.document,['userModule']);
        };

        return {
            initialize: initialize
        };
    }
);