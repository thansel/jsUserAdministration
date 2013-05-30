var services = {
    UsersService : function ()
    {
        return {
            getUsers : function () {
                return [
                    new models.User("Tobias", "Hansel", 35, false),
                    new models.User("Marek" , "Chec", 27, false)
                ];
             }
        }
    }
}