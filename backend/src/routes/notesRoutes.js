import express from 'express';
import { getALLNotes, createNote, updateNote, deleteNote } from '../Controllers/notesController.js';
const router = express.Router();

router.get("/",getALLNotes) 
router.post("/",createNote)
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)

export default router;