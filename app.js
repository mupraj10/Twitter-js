const express = require( 'express' );
const app = express(); // creates an instance of an express application


app.listen(3000, function(){
    console.log("server listening");
});

app.get("/", function(request, response){
    response.send("Welcome!")
});

app.get("/news", function(request, response){
    response.send("This is the news!!")
})

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})
