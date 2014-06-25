Package.describe({
    summary: "A library for creating powerful and flexible finite state machines.  Loosely inspired by Erlang/OTP\'s gen_fsm behavior."
});

Npm.depends({
    'machina': '0.3.6'
});

Package.on_use(function (api) {
    api.add_files("machina.js", ["server","client"]);

    api.export('machina');
});
