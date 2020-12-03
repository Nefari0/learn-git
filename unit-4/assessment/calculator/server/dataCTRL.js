// const noteBook = require('./data.json')


//this is the layout to entire notebook and all individual notes that are added

// const noteBook = [
//     {
//         id: 1,
//         text: "an array ov strings"
//     },
// ]   
// const noteBook = [{
//     id:0,
//     text:"this is a book with lots of textthis is a notebook with lots of textthis is a notebook with lots of text"
// },]   

const noteBook = []   

let note_id = 0

//http://localhost:31415/api/items <---- tests 'getItems'
module.exports = {
    getItems: (req,res) => {
        res.status(200).send(noteBook)
    },

//-------------------------------------
    addItem: (req,res) => {
        const {text} = req.body
        const newItem = {id:note_id,text:req.body.text}
        noteBook.push(newItem)
        console.log(req.body)
        note_id += 1
        res.status(200).send(noteBook)
    },
//-------------------------------------
    deleteItem: (req, res) => {

        const { note_id } = req.params

        const index = noteBook.findIndex((element) => element.id === +note_id)

        noteBook.splice(index,1)
    
        res.status(200).send(noteBook)
      },
//------------------------------------
    editItem: (req,res) => {
        const { note_id } = req.params 

        const { action } = req.query

        const index = noteBook.findIndex((element) => element.id === +note_id)

    } 


    // editItem: (req,res) => {
    //     const { note_id, text } = req.params

    //     //action should enable text to be added to existing/selected note
    //     const { action } = req.query

    //     const index = noteBook.items.findIndex(element.note_id === +note_id)

    //     if(index === -1) {
    //         return res.status(404)
    //     }
    // },
}
