// using laravel mix so that we can compile our js , scss etc , yeah definitely we can use webpack.js , gulf.js etc
let mix = require("laravel-mix");

// from , to
mix.js("resources/js/app.js", "public/js/app.js");

mix.sass("resources/scss/app.scss", "public/css/app.css");
