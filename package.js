Package.describe({
    summary: "A library for creating powerful and flexible finite state machines.  Loosely inspired by Erlang/OTP\'s gen_fsm behavior."
});

Package.on_use(function (api) {
    api.use(['underscore'],['client','server'])
    api.add_files(["lib/machina/lib/machina.js"], ["client",'server']);
    api.export('machina')
});
