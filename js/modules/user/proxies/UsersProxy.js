var proxies = {

    UsersProxy : function (userService)
    {
        return {
            getUsers : function () {
                return userService.getUsers();
            }
        }

    }
}

proxies.UsersProxy.$inject = ['usersServiceID'];