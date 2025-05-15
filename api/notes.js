// TODO: this file :)
import express from "express"
import { getNoteById, getNotes, addNote } from "../db/notes.js"
const router = express.Router()

router.get("/", (req, res)=>{
    const notes = getNotes()
    res.send(notes)
})

router.get("/:id", (req, res)=>{
    const id = Number(req.params.id)
    const note = getNoteById(id)

    if (!note) {
        return res.status(404).send("Note not found")
    }

    res.send(note)
})

router.post("/", (req,res)=>{

    if(!req.body){
        return res.status(400).send("Request must have a body.")
    }
    
    if(!req.body.text){
        return res.status(400).send("New note must have text.")
    }
    
    const { text } = req.body

    addNote(text)
    res.status(201).send(`Added ${text}`)

})

export default router