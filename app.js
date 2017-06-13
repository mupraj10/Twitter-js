const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');

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


app.use(function (req, res, next) {
    console.log(req.method + " " + req.originalUrl);
    next();
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})






nunjucks.configure('views', {noCache: true});

// nunjucks.render('index.html', template, function(err, res) {
//     console.log(res);
// });

app.engine('html', nunjucks.render);
app.set('view engine', 'html');


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