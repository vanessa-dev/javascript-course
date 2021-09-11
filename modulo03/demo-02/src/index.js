
import database from './../database.json';
import Person from './person.js';
import TerminalController from './terminalController';

const DEAFAULT_LANG = "pt-BR";
const STOP_TERM  = ":q";
const terminalController = new TerminalController();

terminalController.initializeTerminal(database,DEAFAULT_LANG);

async function mainLoop() {
    try{
        const answer = await terminalController.question("What??");
        
        if(answer  == STOP_TERM){
            terminalController.closeTerminal();
            console.log("Process finished");
            return;
        }

        const person = Person.generateInstanceFromString(answer);
        console.log("person",person.formatted(DEAFAULT_LANG));
        return mainLoop();
    }catch(e){

    }
}

await mainLoop();

