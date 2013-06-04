"use strict";

require.config({
    paths : {
        angular         : 'libs/angular.min'
        , underscore    : 'libs/underscore'
        , usersCtrl     : 'modules/user/controllers/UsersCtrl'
        , userService   : 'modules/user/services/UserService'
        , usersProxy    : 'modules/user/proxies/UsersProxy'
        , user          : 'modules/user/models/User'
    },

    baseUrl: 'js/'
});

require([
    , 'underscore'
    , 'angular'
    , 'usersCtrl'
    , 'userService'
    , 'usersProxy'
    , 'user'
], function () {
    require(['main'], function (App) {
        App.initialize();
    });
});