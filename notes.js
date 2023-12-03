const fs = require('fs') //import fs module
const chalk = require('chalk') //import chalk library 

const getNotes = () => {
    return 'your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((notes) => notes.title === title )  //check duplicate title
   const duplicateNote = notes.find((note) => note.title === title)
 
   debugger

    if(!duplicateNotes){ //checks if title is empty
        notes.push({ //push title and body
            title: title,
            body: body
    
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    }
    else{
        console.log(chalk.red.inverse('note title taken')) //title taken message
    }
    


}

const removeNote = (title) => {
 const notes = loadNotes()
 const notesToKeep = notes.filter((note) => note.title !== title )
//  (function (note) {
//     return note.title !== title //new array})


 if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse('Note Removed'))
    saveNotes(notesToKeep) //new array to keep
 }else{
    console.log(chalk.red.inverse('No NOTE FOUND'))
 }
}
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note) => {
            console.log(note.title)
    })

}

const readNote = (title) => { //function: Takes a title as an argument and searches for a note with that title

    const notes = loadNotes()     // Calls loadNotes function to get an array of notes.
    const note = notes.find((note) => note.title === title)     // Finds the first note that matches the given title.
if(note){ //if note is found print, if not NOTE NOT FOUND
console.log(chalk.inverse(note.title))
console.log(note.body)
}else{
console.log(chalk.red.inverse('NOTE NOT FOUND'))
}
}

const saveNotes = (notes) => { //function: Takes an array of notes and writes them to a file.
const dataJSON = JSON.stringify(notes) // Converts the notes array to a JSON string.
fs.writeFileSync('notes.json', dataJSON)  // Writes the JSON string to 'notes.json', creating or overwriting the file.
}

const loadNotes = () => { //function: Loads and returns notes from a file.
try{ // Attempts to read 'notes.json' file.
    const dataBuffer = fs.readFileSync('notes.json')// Converts the file's content from buffer to string.
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)         // Parses the JSON string back to an object/array.

} catch (e) {  // If there's an error returns an empty array.
return []

}

    
}

module.exports = { //exports modules so other can call it on it
    getNotes: getNotes, //keyvalue pairs
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,

}
