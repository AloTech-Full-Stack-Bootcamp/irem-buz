const fs = require("fs");
const jsonFile = require("./employees.json");

// KLASOR OLUSTURMA

fs.mkdir("Odev", (err) => {
  if (err) console.log(err);
  console.log("FOLDER CREATED SUCCESSFULLY");
});

// DOSYA OLUSTURMA

fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("FILE SAVED SUCCESSFULLY");
  }
);

// VERI OKUMA

fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

// VERI GUNCELLEME

jsonFile.name = "Employee 7 Name";
jsonFile.salary = "7000";

fs.writeFile("employees.json", JSON.stringify(jsonFile, null, 2), (err) => {
  if (err) console.log(err);
  console.log("FILE UPDATED");
});

// DOSYA SILME

fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  console.log("FILE DELETED");
});
