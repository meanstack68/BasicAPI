// Server.js

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;

app.listen(port);

console.log('Basic Sample RESTful API server started on: ' + port);

app.post('/stringParse/:data', function(req, res) {
   const str2=req.params.data;
   let Strparams = [];
   const str1=str2.replace('0000', '\r\n').replace('000','\r\n');
   //console.log(str1);
   Strparams[0]="FirstName: " + str1.slice(0,3) +"0000";
   Strparams[1]="LastName: " + str1.slice(6,13) +"000";
   Strparams[2]="ClientID: " + str1.slice(15,21);
      
   //console.log('test=\r\n'  + str1.replace('0000', '\r\n').replace('000','\r\n'));
    return res.json({"StatusCode 200": Strparams[0] + "," + Strparams[1] + "," + Strparams[2]});
    //return res.status(200).json({"StatusCode 200" : str1});
    //res.json({"success" : true});
    
})//

app.post('/api/v1/parse/:data', function(req, res) {
    const str3=req.params.data;
    let Strparams1 = [];
   const str4=str3.replace('0000', '\r\n').replace('000','\r\n');
   console.log(str4);
   Strparams1[0]="FirstName: " + str4.slice(1,5) +"0000,";
   Strparams1[1]="LastName: " + str4.slice(7,14) +"000,";
   Strparams1[2]="ClientID: " + str4.slice(16,23);
    
   console.log(Strparams1[0]);
   console.log(Strparams1[1]);
   console.log(Strparams1[2]);
    return res.json({"StatusCode 200": Strparams1[0] +  Strparams1[1] +  Strparams1[2]});
    //return res.status(200).json({"StatusCode 200 ":  + " FirstName: " + str1.slice(0,7).concat(",").concat("LastName: ").concat(str1.slice(8,18)).concat(",").concat("ClientID: ").concat(str1.slice(19,25))});   

} )

app.post('/api/v2/parse/:data', function(req, res) {
    const str3=req.params.data;
    let Strparams1 = [];
   const str4=str3.replace('0000', '\r\n').replace('000','\r\n');
   console.log(str4);
   Strparams1[0]="FirstName: " + str4.slice(1,5) +",";
   Strparams1[1]="LastName: " + str4.slice(7,14) +",";
   Strparams1[2]="ClientID: " + str4.slice(16,19) + "-" + str4.slice(19,23);
    
   console.log(Strparams1[0]);
   console.log(Strparams1[1]);
   console.log(Strparams1[2]);
    return res.json({"StatusCode 200": Strparams1[0] +  Strparams1[1] +  Strparams1[2]});
    //const str1=req.params.data;
    //return res.status(200).json({"StatusCode 200": str1.slice(0,3).concat(",").concat(str1.slice(8,15)).concat(",").concat(str1.slice(19,25))});   

} )

