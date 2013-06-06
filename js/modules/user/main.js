define([
    'modules/user/controllers/usersCtrl'
    , 'modules/user/services/userService'
    , 'modules/user/proxies/usersProxy'
    , 'modules/user/models/user'],

    function UserModule() {
        var initialize = function () {

            // declare the User-Model
            var userModule = angular.module(
                'userModule', // unique model-name
                []            // dependencies on other modules
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
        };

        return {
            initialize: initialize
        };
    }
);
