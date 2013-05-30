var controllers = {

    UsersCtrl : function ($scope, usersProxy)
    {
        $scope.users = usersProxy.getUsers();

        $scope.addUser = function()
        {
            $scope.users.push(
                new models.User($scope.firstName, $scope.lastName, $scope.age, false)
            );

            $scope.firstName="";
            $scope.lastName="";
            $scope.age="";
        };

        $scope.deleteSelectedUser = function()
        {
            $scope.users = _.filter($scope.users, function(user){
                return !user.deleted;
            });
        }
    }
}

// Define function dependencies
controllers.UsersCtrl.$inject = ['$scope', 'usersProxyID'];