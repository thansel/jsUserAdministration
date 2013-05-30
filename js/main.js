// declare the Application-Model
var userAdminApp = angular.module(
    'userAdminApp', // unique model-name
    []         // dependencies on other modules
);

userAdminApp.value(
    '$exceptionHandler',
    function(e){
        alert(e);
    }
);

userAdminApp.factory(
    'usersServiceID',
    function()
    {
        return angular.injector(['userAdminApp', 'ng']).instantiate(services.UsersService);
    }
);

userAdminApp.factory(
    'usersProxyID',
    function()
    {
        return angular.injector(['userAdminApp', 'ng']).instantiate(proxies.UsersProxy);
    }
);