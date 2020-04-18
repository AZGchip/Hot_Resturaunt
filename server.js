var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000

var tableArray = [
    {
      customerName: "Ahmed",
      customerEmail: "ahmed@example.com",
      customerID: "afhaque89",
      phoneNumber: "000-000-0000"
    }
  ];

  var waitingArray = [
    {
      customerName: "Saima",
      customerEmail: "saima@example.com",
      phoneNumber: "000-000-0000",
      customerID: "saimaCool"
    }
  ];
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });