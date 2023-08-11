const fs = require("node:fs");

fs.readFile("readme.txt", "utf-8", function (err, text) {
  if (err) {
    console.log("Ocurrio un error");
    console.log(err);
  } else {
    console.log(text);
  }
});

console.log("Leyendo un archivo...");
