const fs = require('fs');
const { alphabet } = require('./idGenerator');
const { assembleCSVTestData } = require('./dataGenerator');

const letters = alphabet.slice(22, 23);

// letters.forEach(letter => {
//   let wstream = fs.createWriteStream(`./data/seed/data${letter}.json`);
//   const dataSet = assembleTestData([letter], wstream, letter);
// });

letters.forEach(letter => {
    let wstream = fs.createWriteStream(`./data/seed/data${letter}.csv`);
    const dataSet = assembleCSVTestData([letter], wstream, letter);
  });