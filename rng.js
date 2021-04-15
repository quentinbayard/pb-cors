function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    {id: 'x', title: 'x'},
    {id: 'y', title: 'y'}
  ]
});

let data = [];

for (let i=0; i<=25; i++) {
    data.push({
        x: i,
        y: getRandomInt(101)
      });
}
console.log(data);

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));