//import require from "requirejs";
const http = require("http");
var add= require('./add');

function samp(req, res) {
  res.write("<style>");
    res.write("div{background-color: black;color: white;}h1{color:black;}body{background-color:lavander}");
    res.write("</style>");
    res.write("<body></body>")
    res.write("<center><div><img src='https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg' width='10%'><h2>Personal Details</h2></div></center>");
    res.write("<h1>Name : "+add.name());
    res.write("<h1>Roll no : "+add.rollno());
    res.write("<h1>CGPA : "+add.cgpa());
    res.write("<h1>Year : "+add.year());
    res.write("<h1>Email : "+add.email());
    res.write("<h1>Gender : "+add.gender());
    res.write("<h1>Mobile_no : "+add.mobile());
    res.write("<h1>Address : "+add.add());
}
var server = http.createServer(samp);
server.listen(8000);
console.log("server running");