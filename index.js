var conn=require('./app')
var express=require("express");
var app=express();

var bodyParser=require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/main.html');
});

app.post('/',function(req,res){
    var Housing=req.body.Housing;
    var Electricity=req.body.Electricity;
    var Shopping=req.body.Shopping;
    var Food=req.body.Food;
    var income=req.body.income;
    var Household=req.body.Household;
    var date=req.body.date;
    var Books=req.body.Books;
    var Transport=req.body.Transport;
    var Medical=req.body.Medical;
    var Others=req.body.Others;
    var Entertain=req.body.Entertain;

    console.log(Housing);

    conn.connect(function(err){
        if(err) {console.log("error no")};

        var sql="INSERT INTO userentries(income, date, housing, electricity, shopping, food, books, household, transport, entertain, medical, others) VALUES('"+income+"','"+date+"','"+Housing+"','"+Electricity+"','"+Shopping+"','"+Food+"','"+Books+"','"+Household+"','"+Transport+"','"+Entertain+"','"+Medical+"','"+Others+"')";
        conn.query(sql,function(error, result){
            if(error) throw(error);
        })
    })
});

app.listen(7006);