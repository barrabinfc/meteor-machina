Package.describe({
    summary: "A library for creating powerful and flexible finite state machines.  Loosely inspired by Erlang/OTP\'s gen_fsm behavior."
});

Package.on_use(function (api) {
    var _ = Npm.require("underscore");

    api.use(['underscore'],['client','server'])
    api.add_files(["lib/machina/lib/machina.js"], ["client",'server']);
    api.export('machina')
});

Package.on_test(function(api){

    var _ = Npm.require('underscore')

    api.use(['underscore'])
    api.use(['tinytest','test-helpers'])

    api.add_files(["lib/machina/lib/machina.js"], ["client",'server']);

});
