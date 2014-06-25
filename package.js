Package.describe({
    summary: "A library for creating powerful and flexible finite state machines.  Loosely inspired by Erlang/OTP\'s gen_fsm behavior."
});

Npm.depends({
    'underscore': '1.5.2'
});

Package.on_use(function (api) {
    api.use('machina','client');
    api.add_files(["machina.js"], "server");
    api.add_files(["lib/machina/lib/machina.js"], "client");
});
