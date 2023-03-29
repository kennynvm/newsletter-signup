const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    let data = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    const jsonData = JSON.stringify(data);
    const url = "https://...";
    const options = {
        method: "POST",
        auth: "apiKey"
    };

    const request = https.request(url, options, function(response) {
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();


})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})