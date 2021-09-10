import DraftLog from 'draftlog';
import chalk from 'chalk';
import readLine from"readline";
import chalkTable from 'chalk-table';
import database from './../database.json';
import Person from './person.js';

DraftLog(console).addLineListener(process.stdin);

const options = {
    leftPad: 2,
    columns: [
        {field:"id",name: chalk.cyan("ID")},
        {field:"vehicles",name: chalk.magenta("Vehicles")},
        {field:"kmTraveled",name: chalk.cyan("Km Traveled")},
        {field:"from",name: chalk.cyan("From")},
        {field:"to",name: chalk.cyan("To")},
    ]
};

const table = chalkTable(options,database.map(item=> new Person(item).formatted()));
const print = console.draft(table);

setInterval(()=>{
    database.push({id:Date.now(), vehicles: ['Test'+ Date.now()]});
    const table = chalkTable(options,database);
    print(table);
});

const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminal.question("Qual é o seu nome?", msg=>{
    console.log('msg',msg.toString());
});