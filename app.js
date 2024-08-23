let olabb = "olabb";
console.log(olabb);
let fs = require('fs');
let dicc1 = require('./testdicc.json');
console.log('lala ' + dicc1.length);
for(let i =0 ; i < 5; i++ ) console.log(dicc1[i]);

//let dicc = require('./diccionariochino.json')
//let diccF = dicc.filter(i=> i.s.length == 1)
//console.log(dicc.length)
//console.log(diccF.length)
/*fs.writeFile('testdicc.json', JSON.stringify(diccF), (err) => {
    if (err) throw err;
    console.log('noesploto');
})*/

