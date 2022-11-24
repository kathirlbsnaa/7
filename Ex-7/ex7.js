var calculator = require('./calculator');
//import require from 'requirejs';
var http=require("http");
var url=require("url");
var querystring=require("querystring");
function onRequest(req,res){
    var path=url.parse(req.url).pathname;
    console.log('Request for '+path+'received');
    var query=url.parse(req.url).query;
    console.log(query);
    var a=querystring.parse(query)["a"];
    var b=querystring.parse(query)["b"];
    var sign=querystring.parse(query)["sign"];
    res.write("<style>");
    res.write("div{background-color: black;color: white;}h2{font-size: larger;font-family: 'Times New Roman', Times, serif;font-style: italic;font-weight: bold;}h1{font-size: larger;font-family: 'Times New Roman', Times, serif;font-style: italic;font-weight: bold;}");
    res.write("</style>");
    res.write("<center><div><h2>CALCULATOR</h2></div></center>");
    res.write("<h1>First Number="+a);
    res.write("<h1>Second Number="+b);
    if (sign=='+'){
        res.write("<h1>Addition:"+calculator.add(a,b))
    }
    else if(sign=='-')
    {
        res.write("<h1>Subtraction:"+calculator.sub(a,b))
    }
    else if(sign=='*')
    {
        res.write("<h1>Multiplication:"+calculator.mul(a,b))
    }
    else if(sign=='/')
    {
        res.write("<h1>Division:"+calculator.div(a,b))
    }
    res.end();
};
http.createServer(onRequest).listen(8080);
console.log('server has started');