const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//customize yargs ver
yargs.version('1.1.0')

//add, remove, read, list

//create add command
yargs.command({
    command: 'add', //command add value
    describe: 'add a new note',
    builder: { // builders value = object
        title:{
            describe: 'Note title',
            demandOption: true, //is required
            type: 'string',
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) { 
    // argv.title and argv.body are extracted from the command line arguments.
    // argv is an object containing parsed command line arguments. 
    // Here, argv.title and argv.body refer to the title and body of the note 
    // that the user wants to add.
        notes.addNote(argv.title, argv.body)
    }

})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title:{
          describe: 'Note Title',  
          demandOption: true,
          type: 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }

})


//create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler() {
        notes.listNotes()
    }

})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a  note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }

})


yargs.parse() // parses all arguments using information provided
// console.log(yargs.argv)

// if (command === 'add') {
//     console.log('Adding note')
// }
// else if (command === 'remove'){
//     console.log('Removing note')
// }

// const msg = getNotes()

// console.log(msg)

// const greenMsg = chalk.red.bold('Success')
// console.log(greenMsg)

// console.log(process.argv[2])

// console.log(validator.isEmail('andrew@example.com')) //true
// console.log(validator.isURL('https://mead.io')) //true





