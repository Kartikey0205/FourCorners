require("dotenv").config();

const express = require("express");
const ejs = require("ejs"); // templating engines
const expressLayout = require("express-ejs-layouts"); // common layout isme jayega with layout.ejs file name
const path = require("path"); // path to join two file-directory

// Database stuff
const mongoose = require("mongoose");
// for creting session in express we need this
const session = require("express-session");
//  express-flash is used to define a flash message and render it without rendering the request
const flash = require("express-flash");
// connect-mongo is used to store session in database
const MongoDbStore = require("connect-mongo");
const passport = require("passport");

// requiring all links that coming from env file via setup directory and my file inside it
const myfile = require("./setup/myFile");

const app = express(); // calling express app
const PORT = process.env.PORT || 3000; // port via env or self port

// Database connection
const db = myfile.dbUrl;
//Attempt to connect to database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB connected succesfully..");
  })
  .catch((err) => {
    console.log("Error is ", err);
  });

// Session Store

app.use(
  session({
    secret: myfile.secret,
    resave: false,
    store: MongoDbStore.create({
      mongoUrl: db,
    }),
    saveUninitialized: true,
    cookie: {
      //  secure: true
      maxAge: 1000 * 60 * 60 * 24,
      // maxAge: 1000 * 50,
    },
  })
);

// Passport config session k bdd
const passportInit = require("./app/config/passport");
passportInit(passport);
app.use(passport.initialize());
app.use(passport.session());

// using express-flash as a middleware
app.use(flash());

// assests --> jo web site m use ho rhe h
app.use(express.static("public"));
// we are telling express explicitly that we are receiving url encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // server k bta rha hu ki jitte bhi json object h unko decode kr do

// Global Middleware --> y pure web page mein use ho jayega aur isko hm global isiliye bnaye h kuki hmko apne local p means frontend p vo particular chiz chaiye
app.use((req, res, next) => {
  res.locals.session = req.session;
  res.locals.user = req.user; // y hme passport deta h user
  next();
});

//set template engine
app.use(expressLayout); // using templating engine with express
app.set("views", path.join(__dirname, "/resources/views")); // join two paths
app.set("view engine", "ejs"); // telling express that we are using ejs templating engines

// Routes always comes after are initailization of layout templates etc

require("./routes/web")(app); // yhn p hm app mtlb ki express k sari functionality ko reuire krne  k sath hi bhhej rhe as a function parameter taki  koi function use use kr ske

// listening port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
