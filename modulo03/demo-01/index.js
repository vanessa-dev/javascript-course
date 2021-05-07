'use strict';

const {watch, promises: {readFile}} = require('fs');

class File {
    watch(event, filename){
        console.log('args', Array.prototype.slice.call(arguments));
        console.log('this', this);
        this.showContent(filename);
    }

    async showContent(filename){
        console.log(await (await readFile(filename)).toString()); 
    }
}

const file = new File();
//Podemos deixar explicito qual e o contexto que a funcao deve seguir 
//O bind retorna uma funcao com 'this' que se mantem de file, ignorando o 'watch'
// watch(__filename, file.watch.bind(file));
// watch(__filename, file.watch());
// watch(__filename, async(event,filename)=>{
//     console.log(await (await readFile(filename)).toString());
// });

file.watch.call({showContent: ()=> console.log('call: hey sinon')}, null, __filename);
file.watch.apply({showContent: ()=> console.log('call: hey sinon')}, [null, __filename]);