Package.describe({
    summary: "A library for creating powerful and flexible finite state machines.  Loosely inspired by Erlang/OTP\'s gen_fsm behavior."
});

Npm.depends({
    'underscore': '1.5.2',
    'machina': '0.3.6'
});

Package.on_use(function (api) {
    api.use(['underscore'])

    api.add_files([".npm/package/node_modules/machina/lib/machina.js"], ["client"]);
    api.add_files(["machina-server.js"],                                ["server"]);

    api.export('machina',['server'])
});

Package.on_test(function(api){

    api.use(['underscore'])
    api.use(['tinytest','test-helpers'])

    api.add_files([".npm/package/node_modules/machina/lib/machina.js"], ["client"]);
    api.add_files(["machina-server.js"],                                ["server"]);

});
