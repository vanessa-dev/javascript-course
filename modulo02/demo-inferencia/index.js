const {deepStrictEqual} = require("assert");
let counter = 0;
let counter2 = counter;
counter2++;

/////

const item = {count: 0};
const item2 = item;
item2.counter ++;

// tipo pprimitivo gera uma copia em memoria
deepStrictEqual(counter, 0);
deepStrictEqual(counter2, 1);

//tipo de referncia copia o endereço da memoria
// e aponta para o mesmo lugar