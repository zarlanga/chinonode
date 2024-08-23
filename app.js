let olabb = "olabb";
console.log(olabb);
let fs = require('fs');

let dicc2 = require('./diccacortado.json');


/*let dicc2 = dicc1.map(i => {return {
    s: i.s,
    t: i.t,
    p: i.p,
    e: i.e }
})*/
console.log(dicc2.find(e => e.s == "三"))
console.log(dicc2.find(e => e.p == "san"))
/*
for(let i =0 ; i < 5; i++ ) { let p = Math.floor(Math.random() * dicc2.length)
    console.log(p + ":" + JSON.stringify(dicc2[p]));
}
*/
//let dicc = require('./diccionariochino.json')
//let diccF = dicc.filter(i=> i.s.length == 1)
//console.log(dicc.length)
//console.log(diccF.length)
/*fs.writeFile('diccAcortado.json', JSON.stringify(dicc2), (err) => {
    if (err) throw err;
    console.log('noesploto');
})*/

