const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const routes = require('./routes');


var template = {
    title: "Our page",
    people: [
        {name: "Maggy"},
        {name: "Jessica"}
    ]
};

app.listen(3000, function(){
    console.log("server listening");
});

app.use('/', routes);

nunjucks.configure('views', {noCache: true});

app.engine('html', nunjucks.render);
app.set('view engine', 'html');





// nunjucks.render('index.html', template, function(err, res) {
//     console.log(res);
// });

// app.get("/", function(request, response){
//     const people = [{name: "Full",}, {name: "Stack"}, {name: "Son"}];
//     response.render('index.html', template);
// });

// app.get("/news", function(request, response){
//     response.send("This is the news!!")
// });

// app.post("/", function(request,response){
//     response.send("Posting is working! \n");
// });

// app.use(function (req, res, next) {
//     console.log(req.method + " " + req.originalUrl);
//     next();
// });
