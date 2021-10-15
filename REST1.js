const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.urlencoded((extended = true)));

let dictionary = [];

app.get("/users", (req, res) => {
  const data = fs.readFileSync("./sanakirja.txt", {
    encoding: "utf8",
    flag: "r",
  });
  const splitLines = data.split(/\r?\n/);
  /*silmukassa läpi splitLines:ssa jokaisen rivin*/
  splitLines.forEach((line) => {
    const words = line.split(" "); //sanat taulukkoon words
    console.log(words);
    const word = {
      fin: words[0],
      eng: words[1],
    };
    dictionary.push(word);
    console.log(dictionary);
  });

  res.json(dictionary);

  app.post("/users", (req, res) => {
    const data = req.body;
    console.log(data);
  });
});

app.listen(3000);

//tehtävä jäi vajaaksi, pyrin saamaan molemmat metodit b kohtaan//
