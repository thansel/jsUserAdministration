define([
    'jquery'
    , 'underscore'
    , 'angular.min'
    , 'modules/user/controllers/usersCtrl'
    , 'modules/user/services/userService'
    , 'modules/user/proxies/usersProxy'
    , 'modules/user/models/user'],

    function MainApplication() {
        var initialize = function () {

            // declare the User-Model
            var userModule = angular.module(
                'userModule', // unique model-name
                [] // dependencies on other modules
            );

            userModule.value(
                '$exceptionHandler',
                function(e) {
                    alert(e);
                }
            );

            userModule.factory(
                'usersServiceID',
                function() {
                    return angular.injector(['userModule', 'ng']).instantiate(services.UsersService);
                }
            );

            userModule.factory(
                'usersProxyID',
                function() {
                    return angular.injector(['userModule', 'ng']).instantiate(proxies.UsersProxy);
                }
            );

            angular.bootstrap(window.document,['userModule']);
        };

        return {
            initialize: initialize
        };
    }
);