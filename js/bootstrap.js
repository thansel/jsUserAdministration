requirejs.config({
    baseUrl: "js/libs",
    paths: {
        app     : "../app",
        modules : "../modules"
    }
});

requirejs(['app/main'], function (App) {
    App.initialize();
});