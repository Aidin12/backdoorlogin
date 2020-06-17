const defaultOptions = { //fake browser
    headers: {
    "User-Agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    },
    jar: true
    } ;
    
    const request = require("request-promise").defaults(defaultOptions); //pass in defaults
    const fs = require("fs"); //import fs
    const puppeteer = require('puppeteer');
    
    async function main() {
    const options = {
    method: "POST",
    uri: "https://m.facebook.com/login/?next&ref=dbl&fl&refid=8",
    form: {
    email: "myemail6@gmail.com",
    pass: "password",
    },
    simple: false,
    resolveWithFullResponse: true
    };
    
    try {
    
    const result = await request(options);
    console.log(result.headers.location);
    const homepage = await request.get(result.headers.location); //requesting html
    writeFile(homepage);
    const guardianhtml = await request.get("https://m.facebook.com/eveningstandard/");
    writeFile(guardianhtml);
    fs.writeFileSync("./evening.html", guardianhtml);
    } catch(erro) {
    console.error(error);
    console.error("ERROR");
    }


    
    }
    
    //save html to file
    function writeFile(body) {
    fs.writeFile("./evening.html", body, function(err) {
    if (err) {
    console.error();
    }
    console.log("HTML was saved");
    
    
    });
    }
    
    main();